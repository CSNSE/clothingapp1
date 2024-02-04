// ShirtCard1Collection.js
/* eslint-disable */
import * as React from "react";
import { listShirts } from "../graphql/queries";
import ShirtCard1 from "./ShirtCard1";
import { getOverrideProps } from "./utils";
import { Collection, Pagination, Placeholder } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { getUrl } from "@aws-amplify/storage"; 

const nextToken = {};
const apiCache = {};
const client = generateClient();

export default function ShirtCard1Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [pageIndex, setPageIndex] = React.useState(1);
  const [hasMorePages, setHasMorePages] = React.useState(true);
  const [items, setItems] = React.useState([]);
  const [isApiPagination, setIsApiPagination] = React.useState(false);
  const [instanceKey, setInstanceKey] = React.useState("newGuid");
  const [loading, setLoading] = React.useState(true);
  const [maxViewed, setMaxViewed] = React.useState(1);
  const pageSize = 1; // Adjust the page size as needed
  const isPaginated = true;

  React.useEffect(() => {
    nextToken[instanceKey] = "";
    apiCache[instanceKey] = [];
  }, [instanceKey]);

  React.useEffect(() => {
    setIsApiPagination(!!!itemsProp);
  }, [itemsProp]);

  const handlePreviousPage = () => setPageIndex(pageIndex - 1);
  const handleNextPage = () => setPageIndex(pageIndex + 1);
  const jumpToPage = (pageNum) => setPageIndex(pageNum);

  const loadPage = async (page) => {
    const cacheUntil = page * pageSize + 1;
    const newCache = apiCache[instanceKey].slice();
    let newNext = nextToken[instanceKey];

    while ((newCache.length < cacheUntil || !isPaginated) && newNext != null) {
      setLoading(true);
      const variables = { limit: pageSize };
      if (newNext) variables["nextToken"] = newNext;

      const result = (
        await client.graphql({
          query: listShirts.replaceAll("__typename", ""),
          variables,
        })
      ).data.listShirts;

      newCache.push(...result.items);
      newNext = result.nextToken;

      const shirtsFromAPI = result.items;
      await Promise.all(
        shirtsFromAPI.map(async (shirt) => {
          if (shirt.Image) {
            const urlResult = await getUrl({ key: shirt.Image });
            shirt.Image = urlResult.url;
          }
          return shirt;
        })
      );
    }

    const cacheSlice = isPaginated
      ? newCache.slice((page - 1) * pageSize, page * pageSize)
      : newCache;

    setItems(cacheSlice);
    setHasMorePages(!!newNext);
    setLoading(false);
    apiCache[instanceKey] = newCache;
    nextToken[instanceKey] = newNext;
  };

  React.useEffect(() => {
    loadPage(pageIndex);
  }, [pageIndex]);

  React.useEffect(() => {
    setMaxViewed(Math.max(maxViewed, pageIndex));
  }, [pageIndex, maxViewed, setMaxViewed]);

  return (
    <div>
      <Collection
        type="list"
        direction="column"
        justifyContent="left"
        itemsPerPage={pageSize}
        isPaginated={!isApiPagination && isPaginated}
        items={itemsProp || (loading ? new Array(pageSize).fill({}) : items)}
        {...getOverrideProps(overrides, "ShirtCard1Collection")}
        {...rest}
      >
        {(item, index) => {
          if (loading) {
            return <Placeholder key={index} size="large" />;
          }
          return (
            <ShirtCard1
              shirtcard={item}
              key={item.id}
              {...(overrideItems && overrideItems({ item, index }))}
            ></ShirtCard1>
          );
        }}
      </Collection>
      {isApiPagination && isPaginated && (
        <Pagination
          currentPage={pageIndex}
          totalPages={maxViewed}
          hasMorePages={hasMorePages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={jumpToPage}
        />
      )}
    </div>
  );
}
