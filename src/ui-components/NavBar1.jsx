/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NavBar1(props) {
  const { overrides, ...rest } = props;
  const OnClick1 = useNavigateAction({ type: "url", url: "/" });
  const OnClick2 = useNavigateAction({ type: "url", url: "/shirt" });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="320px"
      height="56px"
      justifyContent="space-between"
      alignItems="center"
      overflow="hidden"
      position="relative"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      padding="0px 40px 0px 40px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBar1")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5")}
      >
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="42px"
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
          children="🏠"
          onClick={() => {
            OnClick1();
          }}
          {...getOverrideProps(overrides, "\uD83C\uDFE0")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="42px"
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
          children="👕"
          onClick={() => {
            OnClick2();
          }}
          {...getOverrideProps(overrides, "\uD83D\uDC55")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="42px"
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
          children="👖"
          {...getOverrideProps(overrides, "\uD83D\uDC56")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="42px"
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
          children="👟"
          {...getOverrideProps(overrides, "\uD83D\uDC5F")}
        ></Text>
      </Flex>
    </Flex>
  );
}
