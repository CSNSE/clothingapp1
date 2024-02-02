/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Flex,
  Grid,
  SelectField,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { generateClient } from "aws-amplify/api";
import { createShirt } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
const client = generateClient();
export default function CustomShirtCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Type: "",
    Size: "",
    Brand: undefined,
    Image: undefined,
  };
  const [Type, setType] = React.useState(initialValues.Type);
  const [Size, setSize] = React.useState(initialValues.Size);
  const [Brand, setBrand] = React.useState(initialValues.Brand);
  const [Image, setImage] = React.useState(initialValues.Image);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setType(initialValues.Type);
    setSize(initialValues.Size);
    setBrand(initialValues.Brand);
    setImage(initialValues.Image);
    setErrors({});
  };
  const validations = {
    Type: [{ type: "Required" }],
    Size: [{ type: "Required" }],
    Brand: [{ type: "Required" }],
    Image: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  React.useEffect(() => {}, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Type,
          Size,
          Brand,
          Image,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createShirt.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CustomShirtCreateForm")}
      {...rest}
    >
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={Type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Type: value,
              Size,
              Brand,
              Image,
            };
            const result = onChange(modelFields);
            value = result?.Type ?? value;
          }
          if (errors.Type?.hasError) {
            runValidationTasks("Type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("Type", Type)}
        errorMessage={errors.Type?.errorMessage}
        hasError={errors.Type?.hasError}
        {...getOverrideProps(overrides, "Type")}
      >
        <option
          children="T-Shirt"
          value="T-Shirt"
          {...getOverrideProps(overrides, "Typeoption0")}
        ></option>
        <option
          children="Longsleeve"
          value="Longsleeve"
          {...getOverrideProps(overrides, "Typeoption1")}
        ></option>
        <option
          children="Polo"
          value="Polo"
          {...getOverrideProps(overrides, "Typeoption2")}
        ></option>
        <option
          children="Tanktop"
          value="Tanktop"
          {...getOverrideProps(overrides, "Typeoption3")}
        ></option>
        <option
          children="Dress Shirt"
          value="Dress Shirt"
          {...getOverrideProps(overrides, "Typeoption4")}
        ></option>
      </SelectField>
      <SelectField
        label="Size"
        placeholder="Please select an option"
        isDisabled={false}
        value={Size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Type,
              Size: value,
              Brand,
              Image,
            };
            const result = onChange(modelFields);
            value = result?.Size ?? value;
          }
          if (errors.Size?.hasError) {
            runValidationTasks("Size", value);
          }
          setSize(value);
        }}
        onBlur={() => runValidationTasks("Size", Size)}
        errorMessage={errors.Size?.errorMessage}
        hasError={errors.Size?.hasError}
        {...getOverrideProps(overrides, "Size")}
      >
        <option
          children="XXS"
          value="XXS"
          {...getOverrideProps(overrides, "Sizeoption0")}
        ></option>
        <option
          children="XS"
          value="XS"
          {...getOverrideProps(overrides, "Sizeoption1")}
        ></option>
        <option
          children="S"
          value="S"
          {...getOverrideProps(overrides, "Sizeoption2")}
        ></option>
        <option
          children="M"
          value="M"
          {...getOverrideProps(overrides, "Sizeoption3")}
        ></option>
        <option
          children="L"
          value="L"
          {...getOverrideProps(overrides, "Sizeoption4")}
        ></option>
        <option
          children="XL"
          value="XL"
          {...getOverrideProps(overrides, "Sizeoption5")}
        ></option>
        <option
          children="XXL"
          value="XXL"
          {...getOverrideProps(overrides, "Sizeoption6")}
        ></option>
      </SelectField>
      <Autocomplete
        label="Brand"
        isRequired={true}
        isReadOnly={false}
        options={[
          {
            id: "Nike",
            label: "Nike",
          },
          {
            id: "Adidas",
            label: "Adidas",
          },
          {
            id: "Gucci",
            label: "Gucci",
          },
          {
            id: "Louis Vuitton",
            label: "Louis Vuitton",
          },
          {
            id: "Zara",
            label: "Zara",
          },
          {
            id: "H&M",
            label: "H&M",
          },
          {
            id: "Uniqlo",
            label: "Uniqlo",
          },
          {
            id: "Herm\u00E8s",
            label: "Herm\u00E8s",
          },
          {
            id: "Supreme",
            label: "Supreme",
          },
          {
            id: "Levi's",
            label: "Levi's",
          },
          {
            id: "Prada",
            label: "Prada",
          },
          {
            id: "Dolce & Gabbana",
            label: "Dolce & Gabbana",
          },
          {
            id: "Burberry",
            label: "Burberry",
          },
          {
            id: "Versace",
            label: "Versace",
          },
          {
            id: "Armani",
            label: "Armani",
          },
          {
            id: "Balenciaga",
            label: "Balenciaga",
          },
          {
            id: "Calvin Klein",
            label: "Calvin Klein",
          },
          {
            id: "Ralph Lauren",
            label: "Ralph Lauren",
          },
          {
            id: "Tommy Hilfiger",
            label: "Tommy Hilfiger",
          },
          {
            id: "Chanel",
            label: "Chanel",
          },
          {
            id: "Givenchy",
            label: "Givenchy",
          },
          {
            id: "Fendi",
            label: "Fendi",
          },
          {
            id: "Saint Laurent",
            label: "Saint Laurent",
          },
          {
            id: "Hugo Boss",
            label: "Hugo Boss",
          },
          {
            id: "Valentino",
            label: "Valentino",
          },
          {
            id: "Dior",
            label: "Dior",
          },
          {
            id: "Lacoste",
            label: "Lacoste",
          },
          {
            id: "Off-White",
            label: "Off-White",
          },
          {
            id: "Kenzo",
            label: "Kenzo",
          },
          {
            id: "Alexander McQueen",
            label: "Alexander McQueen",
          },
          {
            id: "Under Armour",
            label: "Under Armour",
          },
          {
            id: "Diesel",
            label: "Diesel",
          },
          {
            id: "Puma",
            label: "Puma",
          },
          {
            id: "Reebok",
            label: "Reebok",
          },
          {
            id: "Patagonia",
            label: "Patagonia",
          },
          {
            id: "ASOS",
            label: "ASOS",
          },
          {
            id: "Gap",
            label: "Gap",
          },
          {
            id: "Old Navy",
            label: "Old Navy",
          },
          {
            id: "Forever 21",
            label: "Forever 21",
          },
          {
            id: "Lululemon Athletica",
            label: "Lululemon Athletica",
          },
          {
            id: "Coach",
            label: "Coach",
          },
          {
            id: "Ted Baker",
            label: "Ted Baker",
          },
          {
            id: "G-Star Raw",
            label: "G-Star Raw",
          },
          {
            id: "Stone Island",
            label: "Stone Island",
          },
          {
            id: "Moncler",
            label: "Moncler",
          },
          {
            id: "Bershka",
            label: "Bershka",
          },
          {
            id: "Mango",
            label: "Mango",
          },
          {
            id: "Pull & Bear",
            label: "Pull & Bear",
          },
          {
            id: "Massimo Dutti",
            label: "Massimo Dutti",
          },
          {
            id: "Fred Perry",
            label: "Fred Perry",
          },
          {
            id: "Superdry",
            label: "Superdry",
          },
          {
            id: "AllSaints",
            label: "AllSaints",
          },
          {
            id: "Vivienne Westwood",
            label: "Vivienne Westwood",
          },
          {
            id: "Balmain",
            label: "Balmain",
          },
          {
            id: "Moschino",
            label: "Moschino",
          },
          {
            id: "Comme des Gar\u00E7ons",
            label: "Comme des Gar\u00E7ons",
          },
          {
            id: "Issey Miyake",
            label: "Issey Miyake",
          },
          {
            id: "Yohji Yamamoto",
            label: "Yohji Yamamoto",
          },
          {
            id: "Helmut Lang",
            label: "Helmut Lang",
          },
          {
            id: "Rick Owens",
            label: "Rick Owens",
          },
          {
            id: "Maison Margiela",
            label: "Maison Margiela",
          },
          {
            id: "Paul Smith",
            label: "Paul Smith",
          },
          {
            id: "Thom Browne",
            label: "Thom Browne",
          },
          {
            id: "Acne Studios",
            label: "Acne Studios",
          },
          {
            id: "Phillip Lim",
            label: "Phillip Lim",
          },
          {
            id: "Alexander Wang",
            label: "Alexander Wang",
          },
          {
            id: "Zadig & Voltaire",
            label: "Zadig & Voltaire",
          },
          {
            id: "Nanushka",
            label: "Nanushka",
          },
          {
            id: "Zimmermann",
            label: "Zimmermann",
          },
          {
            id: "Elie Saab",
            label: "Elie Saab",
          },
          {
            id: "Erdem",
            label: "Erdem",
          },
          {
            id: "J.Crew",
            label: "J.Crew",
          },
          {
            id: "Banana Republic",
            label: "Banana Republic",
          },
          {
            id: "Brooks Brothers",
            label: "Brooks Brothers",
          },
          {
            id: "Ted Baker",
            label: "Ted Baker",
          },
          {
            id: "Lands' End",
            label: "Lands' End",
          },
          {
            id: "Bonobos",
            label: "Bonobos",
          },
          {
            id: "Rag & Bone",
            label: "Rag & Bone",
          },
          {
            id: "John Varvatos",
            label: "John Varvatos",
          },
          {
            id: "Theory",
            label: "Theory",
          },
          {
            id: "Robert Graham",
            label: "Robert Graham",
          },
          {
            id: "Tom Ford",
            label: "Tom Ford",
          },
          {
            id: "Billionaire Boys Club",
            label: "Billionaire Boys Club",
          },
          {
            id: "Iceberg",
            label: "Iceberg",
          },
          {
            id: "Marc Ecko",
            label: "Marc Ecko",
          },
          {
            id: "Ben Sherman",
            label: "Ben Sherman",
          },
          {
            id: "Gant",
            label: "Gant",
          },
          {
            id: "Lucky Brand",
            label: "Lucky Brand",
          },
          {
            id: "Vineyard Vines",
            label: "Vineyard Vines",
          },
          {
            id: "Original Penguin",
            label: "Original Penguin",
          },
          {
            id: "Scotch & Soda",
            label: "Scotch & Soda",
          },
          {
            id: "American Eagle Outfitters",
            label: "American Eagle Outfitters",
          },
          {
            id: "Abercrombie & Fitch",
            label: "Abercrombie & Fitch",
          },
          {
            id: "Hollister Co.",
            label: "Hollister Co.",
          },
          {
            id: "Express",
            label: "Express",
          },
          {
            id: "Urban Outfitters",
            label: "Urban Outfitters",
          },
          {
            id: "Jack & Jones",
            label: "Jack & Jones",
          },
          {
            id: "A.P.C.",
            label: "A.P.C.",
          },
          {
            id: "Topman",
            label: "Topman",
          },
          {
            id: "Lee Cooper",
            label: "Lee Cooper",
          },
          {
            id: "Pepe Jeans",
            label: "Pepe Jeans",
          },
          {
            id: "Wrangler",
            label: "Wrangler",
          },
          {
            id: "Diesel",
            label: "Diesel",
          },
          {
            id: "Levi's",
            label: "Levi's",
          },
          {
            id: "Dockers",
            label: "Dockers",
          },
          {
            id: "Nautica",
            label: "Nautica",
          },
          {
            id: "Perry Ellis",
            label: "Perry Ellis",
          },
          {
            id: "Izod",
            label: "Izod",
          },
          {
            id: "Van Heusen",
            label: "Van Heusen",
          },
          {
            id: "Arrow",
            label: "Arrow",
          },
          {
            id: "Calvin Klein",
            label: "Calvin Klein",
          },
          {
            id: "Kenneth Cole",
            label: "Kenneth Cole",
          },
        ]}
        onSelect={({ id, label }) => {
          setBrand(id);
          runValidationTasks("Brand", id);
        }}
        onClear={() => {
          setBrand("");
        }}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Type,
              Size,
              Brand: value,
              Image,
            };
            const result = onChange(modelFields);
            value = result?.Brand ?? value;
          }
          if (errors.Brand?.hasError) {
            runValidationTasks("Brand", value);
          }
          setBrand(value);
        }}
        onBlur={() => runValidationTasks("Brand", Brand)}
        errorMessage={errors.Brand?.errorMessage}
        hasError={errors.Brand?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "Brand")}
      ></Autocomplete>
      <Field
        errorMessage={errors.Image?.errorMessage}
        hasError={errors.Image?.hasError}
        label={"Image"}
        isRequired={true}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setImage((prev) => {
              let value = key;
              if (onChange) {
                const modelFields = {
                  Type,
                  Size,
                  Brand,
                  Image: value,
                };
                const result = onChange(modelFields);
                value = result?.Image ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setImage((prev) => {
              let value = initialValues?.Image;
              if (onChange) {
                const modelFields = {
                  Type,
                  Size,
                  Brand,
                  Image: value,
                };
                const result = onChange(modelFields);
                value = result?.Image ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["image/"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          {...getOverrideProps(overrides, "Image")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
