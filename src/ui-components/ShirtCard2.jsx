/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { deleteShirt } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
const client = generateClient();
export default function ShirtCard2(props) {
  const { shirt2, overrides, ...rest } = props;
  const deleteOnClick = async () => {
    await client.graphql({
      query: deleteShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          id: shirt2?.id,
        },
      },
    });
  };
  return (
    <Flex
      gap="4px"
      direction="column"
      width="320px"
      height="500px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ShirtCard2")}
      {...rest}
    >
      <Image
        width="unset"
        height="376px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={shirt2?.Image}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 2px 0px 2px"
        {...getOverrideProps(overrides, "Followers")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            deleteOnClick();
          }}
          {...getOverrideProps(overrides, "delete")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            type="delete"
            {...getOverrideProps(overrides, "MyIcon3849853")}
          ></MyIcon>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "edit")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            type="edit"
            {...getOverrideProps(overrides, "MyIcon3849854")}
          ></MyIcon>
        </View>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="320px"
        height="90px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 8px 0px 8px"
        {...getOverrideProps(overrides, "Text Grouping")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={shirt2?.Brand}
          {...getOverrideProps(overrides, "Brand")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={shirt2?.Type}
          {...getOverrideProps(overrides, "Type")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={shirt2?.Size}
          {...getOverrideProps(overrides, "Size")}
        ></Text>
      </Flex>
    </Flex>
  );
}
