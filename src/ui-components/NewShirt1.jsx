/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth, useNavigateAction } from "./utils";
import { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createShirt } from "../graphql/mutations";
import MyIcon from "./MyIcon";
import { Button, Flex, Image, Text, TextField } from "@aws-amplify/ui-react";
const client = generateClient();
export default function NewShirt1(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  const [
    textFieldThreeEightSixThreeFiveEightThreeValue,
    setTextFieldThreeEightSixThreeFiveEightThreeValue,
  ] = useState("");
  const [
    textFieldThreeEightSixThreeFiveEightFourValue,
    setTextFieldThreeEightSixThreeFiveEightFourValue,
  ] = useState("");
  const [
    textFieldThreeEightSixThreeSixZeroNineValue,
    setTextFieldThreeEightSixThreeSixZeroNineValue,
  ] = useState("");
  const editProfileOnClick = useNavigateAction({ type: "url", url: "/" });
  const buttonOnClick = async () => {
    await client.graphql({
      query: createShirt.replaceAll("__typename", ""),
      variables: {
        input: {
          Type: textFieldThreeEightSixThreeFiveEightThreeValue,
          Size: textFieldThreeEightSixThreeFiveEightFourValue,
          Brand: textFieldThreeEightSixThreeSixZeroNineValue,
          Image: authAttributes["preferred_username"],
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="column"
      width="320px"
      height="500px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NewShirt1")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="500px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            editProfileOnClick();
          }}
          {...getOverrideProps(overrides, "Edit Profile")}
        >
          <MyIcon
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="close"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New Shirt"
            {...getOverrideProps(overrides, "New Shirt")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Profile")}
        >
          <Image
            width="96px"
            height="96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <TextField
            width="145px"
            height="unset"
            label="Brand"
            placeholder="Nike, Adidas..."
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixThreeSixZeroNineValue}
            onChange={(event) => {
              setTextFieldThreeEightSixThreeSixZeroNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3863609")}
          ></TextField>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Type"
            placeholder="T-Shirt, Longsleeve, etc."
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixThreeFiveEightThreeValue}
            onChange={(event) => {
              setTextFieldThreeEightSixThreeFiveEightThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3863583")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Size"
            placeholder="XS, S, M, L, XL"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeEightSixThreeFiveEightFourValue}
            onChange={(event) => {
              setTextFieldThreeEightSixThreeFiveEightFourValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField3863584")}
          ></TextField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Create"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
