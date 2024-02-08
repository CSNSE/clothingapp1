/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Image, View } from "@aws-amplify/ui-react";
export default function InstagramNavigationBottom(props) {
  const { overrides, ...rest } = props;
  const homeOnClick = useNavigateAction({ type: "url", url: "/" });
  const addIconFilledOnClick = useNavigateAction({
    type: "url",
    url: "/shirt",
  });
  const avatarOnClick = useNavigateAction({ type: "url", url: "/profile" });
  return (
    <Flex
      gap="6px"
      direction="column"
      width="320px"
      height="70px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      boxShadow="0px -0.9756097197532654px 0px rgba(0.8784313797950745, 0.8784313797950745, 0.8784313797950745, 1)"
      padding="0px 0px 7.804877758026123px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "InstagramNavigationBottom")}
      {...rest}
    >
      <Flex
        gap="46.17885971069336px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10.406503677368164px 18.211381912231445px 13.008129119873047px 18.211381912231445px"
        {...getOverrideProps(overrides, "Icons")}
      >
        <View
          width="20.81px"
          height="20.81px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        >
          <Icon
            width="18.21px"
            height="17.24px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 18.211381912231445,
              height: 17.23577117919922,
            }}
            paths={[
              {
                d: "M9.10569 0C8.90288 0 8.69593 0.0794854 8.53865 0.238456L0.612565 8.24974C0.219364 8.64717 0 9.18265 0 9.74323L0 15.9682C0 16.6668 0.562897 17.2358 1.2541 17.2358L5.79867 17.2358C6.4816 17.2358 7.03621 16.6752 7.03621 15.9849L7.03621 12.2198C7.03621 11.0652 7.96334 10.1281 9.10569 10.1281C10.248 10.1281 11.1752 11.0652 11.1752 12.2198L11.1752 15.9849C11.1752 16.6752 11.7298 17.2358 12.4127 17.2358L16.9573 17.2358C17.6485 17.2358 18.2114 16.6668 18.2114 15.9682L18.2114 9.74323C18.2114 9.18265 17.992 8.64717 17.5988 8.24974L9.67273 0.238456C9.51545 0.0794854 9.3085 0 9.10569 0Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="7.03%"
            bottom="10.16%"
            left="6.25%"
            right="6.25%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <View
          width="20.81px"
          height="20.81px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Search38691793")}
        >
          <Icon
            width="17.97px"
            height="17.9px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 17.973264694213867,
              height: 17.90178871154785,
            }}
            paths={[
              {
                d: "M13.9418 13.291L13.6248 13.0061C13.4732 13.1748 13.4802 13.4327 13.6409 13.5929L13.9418 13.291ZM13.3442 13.8826L13.6452 13.5807C13.4848 13.4209 13.2275 13.4143 13.0592 13.5657L13.3442 13.8826ZM17.0799 17.6069L17.3809 17.3051L17.0799 17.6069ZM17.9745 16.7096L14.2427 12.9892L13.6409 13.5929L17.3726 17.3133L17.9745 16.7096ZM14.2588 13.576C15.5962 12.0881 16.4174 10.1294 16.4174 7.97127L15.565 7.97127C15.565 9.9079 14.8291 11.6663 13.6248 13.0061L14.2588 13.576ZM16.4174 7.97127C16.4174 3.33366 12.6442 -0.426233 7.9956 -0.426233L7.9956 0.426233C12.1758 0.426233 15.565 3.80692 15.565 7.97127L16.4174 7.97127ZM7.9956 -0.426233C3.34701 -0.426233 -0.426233 3.33366 -0.426233 7.97127L0.426233 7.97127C0.426233 3.80692 3.81536 0.426233 7.9956 0.426233L7.9956 -0.426233ZM-0.426233 7.97127C-0.426233 12.6089 3.34701 16.3688 7.9956 16.3688L7.9956 15.5163C3.81536 15.5163 0.426233 12.1356 0.426233 7.97127L-0.426233 7.97127ZM7.9956 16.3688C10.1684 16.3688 12.1371 15.5415 13.6293 14.1995L13.0592 13.5657C11.7151 14.7745 9.94684 15.5163 7.9956 15.5163L7.9956 16.3688ZM13.0433 14.1844L16.779 17.9088L17.3809 17.3051L13.6452 13.5807L13.0433 14.1844ZM1.26788 7.97127C1.26788 4.2768 4.28668 1.26531 7.9956 1.26531L7.9956 0.412848C3.81833 0.412848 0.415409 3.80355 0.415409 7.97127L1.26788 7.97127ZM7.9956 1.26531C11.7045 1.26531 14.7233 4.2768 14.7233 7.97127L15.5758 7.97127C15.5758 3.80355 12.1729 0.412848 7.9956 0.412848L7.9956 1.26531ZM14.7233 7.97127C14.7233 11.6657 11.7045 14.6772 7.9956 14.6772L7.9956 15.5297C12.1729 15.5297 15.5758 12.139 15.5758 7.97127L14.7233 7.97127ZM7.9956 14.6772C4.28668 14.6772 1.26788 11.6657 1.26788 7.97127L0.415409 7.97127C0.415409 12.139 3.81833 15.5297 7.9956 15.5297L7.9956 14.6772ZM16.779 17.9088C17.1086 18.2374 17.6416 18.2383 17.9724 17.9109L17.3727 17.305C17.3725 17.3052 17.3727 17.3049 17.3732 17.3046C17.3737 17.3043 17.3743 17.304 17.3748 17.3038C17.3758 17.3034 17.3764 17.3034 17.3768 17.3034C17.3771 17.3034 17.3777 17.3034 17.3787 17.3038C17.3793 17.304 17.3798 17.3043 17.3803 17.3046C17.3808 17.305 17.381 17.3052 17.3809 17.3051L16.779 17.9088ZM17.3726 17.3133C17.3728 17.3134 17.3725 17.3132 17.3722 17.3127C17.3719 17.3122 17.3716 17.3117 17.3714 17.3112C17.371 17.3101 17.3709 17.3095 17.3709 17.3092C17.3709 17.3089 17.371 17.3082 17.3714 17.3072C17.3716 17.3067 17.3719 17.3061 17.3722 17.3056C17.3726 17.3051 17.3728 17.3049 17.3727 17.305L17.9724 17.9109C18.3062 17.5804 18.3072 17.0413 17.9745 16.7096L17.3726 17.3133Z",
                stroke: "rgba(51,51,51,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 0,
              },
              {
                d: "M17.6725 17.608C17.8383 17.4438 17.8388 17.1761 17.6736 17.0115L13.9418 13.291C15.2127 11.8772 15.9912 10.0186 15.9912 7.97127C15.9912 3.57029 12.41 0 7.9956 0C3.58119 0 0 3.57029 0 7.97127C0 12.3722 3.58119 15.9425 7.9956 15.9425C10.0576 15.9425 11.9261 15.158 13.3442 13.8826L17.0799 17.6069C17.2436 17.7701 17.5083 17.7705 17.6725 17.608L17.6725 17.608ZM0.841642 7.97127C0.841642 4.04017 4.05251 0.839081 7.9956 0.839081C11.9387 0.839081 15.1496 4.04017 15.1496 7.97127C15.1496 11.9024 11.9387 15.1035 7.9956 15.1035C4.05251 15.1035 0.841642 11.9024 0.841642 7.97127Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.25%"
            bottom="7.74%"
            left="6.25%"
            right="7.39%"
            {...getOverrideProps(overrides, "Search38691794")}
          ></Icon>
        </View>
        <View
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            addIconFilledOnClick();
          }}
          {...getOverrideProps(overrides, "Add Icon Filled")}
        >
          <Icon
            width="17.5px"
            height="17.5px"
            viewBox={{ minX: 0, minY: 0, width: 17.5, height: 17.5 }}
            paths={[
              {
                d: "M13.3333 1.5L4.16667 1.5C2.69391 1.5 1.5 2.69391 1.5 4.16667L1.5 13.3333C1.5 14.8061 2.69391 16 4.16667 16L13.3333 16C14.8061 16 16 14.8061 16 13.3333L16 4.16667C16 2.69391 14.8061 1.5 13.3333 1.5ZM4.16667 0C1.86548 0 0 1.86548 0 4.16667L0 13.3333C0 15.6345 1.86548 17.5 4.16667 17.5L13.3333 17.5C15.6345 17.5 17.5 15.6345 17.5 13.3333L17.5 4.16667C17.5 1.86548 15.6345 0 13.3333 0L4.16667 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="6.25%"
            bottom="6.25%"
            left="6.25%"
            right="6.25%"
            {...getOverrideProps(overrides, "Rectangle 1427 (Stroke)")}
          ></Icon>
          <Icon
            width="9.06px"
            height="9.06px"
            viewBox={{ minX: 0, minY: 0, width: 9.0625, height: 9.0625 }}
            paths={[
              {
                d: "M4.53125 0C4.20218 0 3.93542 0.266761 3.93542 0.595827L3.93542 3.93542L0.595827 3.93542C0.266761 3.93542 0 4.20218 0 4.53125C0 4.86032 0.266761 5.12708 0.595827 5.12708L3.93542 5.12708L3.93542 8.46667C3.93542 8.79574 4.20218 9.0625 4.53125 9.0625C4.86032 9.0625 5.12708 8.79574 5.12708 8.46667L5.12708 5.12708L8.46667 5.12708C8.79574 5.12708 9.0625 4.86032 9.0625 4.53125C9.0625 4.20218 8.79574 3.93542 8.46667 3.93542L5.12708 3.93542L5.12708 0.595827C5.12708 0.266761 4.86032 0 4.53125 0Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="5.47px"
            left="5.47px"
            {...getOverrideProps(overrides, "Union38691797")}
          >
            <Icon
              width="8.75px"
              height="8.75px"
              viewBox={{ minX: 0, minY: 0, width: 8.75, height: 8.75 }}
              paths={[
                {
                  d: "M4.375 0C4.61777 0 4.81458 0.196805 4.81458 0.439577L4.81458 3.93542L8.31042 3.93542C8.55319 3.93542 8.75 4.13223 8.75 4.375C8.75 4.61777 8.55319 4.81458 8.31042 4.81458L4.81458 4.81458L4.81458 8.31042C4.81458 8.55319 4.61777 8.75 4.375 8.75C4.13223 8.75 3.93542 8.55319 3.93542 8.31042L3.93542 4.81458L0.439577 4.81458C0.196805 4.81458 0 4.61777 0 4.375C0 4.13223 0.196805 3.93542 0.439577 3.93542L3.93542 3.93542L3.93542 0.439577C3.93542 0.196805 4.13223 0 4.375 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 4.38px - 5.47px)"
              left="calc(50% - 4.38px - 5.47px)"
              {...getOverrideProps(overrides, "Vector (Stroke)")}
            ></Icon>
            <Icon
              width="9.06px"
              height="9.06px"
              viewBox={{ minX: 0, minY: 0, width: 9.0625, height: 9.0625 }}
              paths={[
                {
                  d: "M3.93542 0.595827C3.93542 0.266761 4.20218 0 4.53125 0C4.86032 0 5.12708 0.266761 5.12708 0.595827L5.12708 3.93542L8.46667 3.93542C8.79574 3.93542 9.0625 4.20218 9.0625 4.53125C9.0625 4.86032 8.79574 5.12708 8.46667 5.12708L5.12708 5.12708L5.12708 8.46667C5.12708 8.79574 4.86032 9.0625 4.53125 9.0625C4.20218 9.0625 3.93542 8.79574 3.93542 8.46667L3.93542 5.12708L0.595827 5.12708C0.266761 5.12708 0 4.86032 0 4.53125C0 4.20218 0.266761 3.93542 0.595827 3.93542L3.93542 3.93542L3.93542 0.595827ZM4.53125 0.3125C4.37477 0.3125 4.24792 0.43935 4.24792 0.595827L4.24792 4.24792L0.595827 4.24792C0.43935 4.24792 0.3125 4.37477 0.3125 4.53125C0.3125 4.68773 0.43935 4.81458 0.595827 4.81458L4.24792 4.81458L4.24792 8.46667C4.24792 8.62315 4.37477 8.75 4.53125 8.75C4.68773 8.75 4.81458 8.62315 4.81458 8.46667L4.81458 4.81458L8.46667 4.81458C8.62315 4.81458 8.75 4.68773 8.75 4.53125C8.75 4.37477 8.62315 4.24792 8.46667 4.24792L4.81458 4.24792L4.81458 0.595827C4.81458 0.43935 4.68773 0.3125 4.53125 0.3125Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="calc(50% - 4.53px - 5.47px)"
              left="calc(50% - 4.53px - 5.47px)"
              {...getOverrideProps(overrides, "Vector (Stroke) (Stroke)")}
            ></Icon>
          </Icon>
        </View>
        <View
          width="20.81px"
          height="20.81px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Shop")}
        >
          <Icon
            width="15.35px"
            height="18.54px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 15.349864959716797,
              height: 18.536584854125977,
            }}
            paths={[
              {
                d: "M7.87538 1.52355C6.86089 1.52355 6.03849 2.34345 6.03849 3.35485L6.03849 4.35219L4.51029 4.35219L4.51029 3.35485C4.51029 1.50202 6.01689 0 7.87538 0C9.73387 0 11.2405 1.50202 11.2405 3.35485L11.2405 4.35219L9.71227 4.35219L9.71227 3.35485C9.71227 2.34345 8.88986 1.52355 7.87538 1.52355ZM12.396 5.87576L2.9539 5.87576C2.41591 5.87576 1.97064 6.2928 1.93708 6.82811L1.53535 13.2363C1.40705 15.2829 3.03737 17.013 5.09421 17.013L10.2557 17.013C12.3125 17.013 13.9428 15.2829 13.8145 13.2363L13.4128 6.82811C13.3792 6.2928 12.934 5.87576 12.396 5.87576ZM2.9539 4.35221C1.60892 4.35221 0.495755 5.3948 0.411858 6.73307L0.0101232 13.1413C-0.173165 16.065 2.15588 18.5366 5.09421 18.5366L10.2557 18.5366C13.194 18.5366 15.523 16.065 15.3397 13.1413L14.938 6.73307C14.8541 5.3948 13.7409 4.35221 12.396 4.35221L2.9539 4.35221ZM9.71199 7.74311C9.71199 8.75451 8.88959 9.57441 7.8751 9.57441C6.86062 9.57441 6.03821 8.75451 6.03821 7.74311L6.03821 7.54364C6.03821 7.12292 5.69611 6.78186 5.27411 6.78186C4.85211 6.78186 4.51001 7.12292 4.51001 7.54364L4.51001 7.74311C4.51001 9.59594 6.01662 11.098 7.8751 11.098C9.73359 11.098 11.2402 9.59594 11.2402 7.74311L11.2402 7.54364C11.2402 7.12292 10.8981 6.78186 10.4761 6.78186C10.0541 6.78186 9.71199 7.12292 9.71199 7.54364L9.71199 7.74311Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1.3px"
            left="2.73px"
            {...getOverrideProps(overrides, "Union38691801")}
          >
            <Icon
              width="15.35px"
              height="14.18px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 15.349865913391113,
                height: 14.18435001373291,
              }}
              paths={[
                {
                  d: "M12.396 1.52355L2.9539 1.52355C2.41591 1.52355 1.97064 1.94058 1.93708 2.47589L1.53535 8.88409C1.40705 10.9307 3.03737 12.6608 5.09421 12.6608L10.2557 12.6608C12.3125 12.6608 13.9428 10.9307 13.8145 8.88409L13.4128 2.47589C13.3792 1.94058 12.934 1.52355 12.396 1.52355ZM2.9539 0C1.60892 0 0.495755 1.04258 0.411858 2.38086L0.0101232 8.78906C-0.173165 11.7127 2.15588 14.1844 5.09421 14.1844L10.2557 14.1844C13.194 14.1844 15.523 11.7127 15.3397 8.78906L14.938 2.38086C14.8541 1.04258 13.7409 0 12.396 0L2.9539 0Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.91%"
              bottom="10.94%"
              left="0%"
              right="26.25%"
              {...getOverrideProps(overrides, "Rectangle 1428 (Stroke)")}
            ></Icon>
            <Icon
              width="6.73px"
              height="4.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.7301788330078125,
                height: 4.352189540863037,
              }}
              paths={[
                {
                  d: "M3.36509 1.52355C2.3506 1.52355 1.5282 2.34345 1.5282 3.35485L1.5282 4.35219L0 4.35219L0 3.35485C0 1.50202 1.5066 0 3.36509 0C5.22358 0 6.73018 1.50202 6.73018 3.35485L6.73018 4.35219L5.20198 4.35219L5.20198 3.35485C5.20198 2.34345 4.37958 1.52355 3.36509 1.52355Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="79.09%"
              left="21.67%"
              right="45.99%"
              {...getOverrideProps(overrides, "Vector 5 (Stroke)")}
            ></Icon>
            <Icon
              width="6.73px"
              height="4.32px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.730180165159254,
                height: 4.316094508242145,
              }}
              paths={[
                {
                  d: "M3.36509 1.52355C2.3506 1.52355 1.5282 2.34345 1.5282 3.35485L1.5282 3.55432C1.5282 3.97504 1.1861 4.31609 0.7641 4.31609C0.342099 4.31609 5.08993e-15 3.97504 5.08993e-15 3.55432L5.08993e-15 3.35485C-1.01209e-07 1.50202 1.5066 0 3.36509 0C5.22358 0 6.73018 1.50202 6.73018 3.35485L6.73018 3.55432C6.73018 3.97504 6.38808 4.31609 5.96608 4.31609C5.54408 4.31609 5.20198 3.97504 5.20198 3.55432L5.20198 3.35485C5.20198 2.34345 4.37958 1.52355 3.36509 1.52355Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="53.32%"
              bottom="25.94%"
              left="54.01%"
              right="13.66%"
              transformOrigin="top left"
              transform="rotate(180deg)"
              {...getOverrideProps(overrides, "Vector 6 (Stroke)")}
            ></Icon>
          </Icon>
        </View>
        <View
          width="20.81px"
          height="20.81px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="32.52032470703125px"
          padding="0px 0px 0px 0px"
          onClick={() => {
            avatarOnClick();
          }}
          {...getOverrideProps(overrides, "Avatar")}
        >
          <View
            width="18.21px"
            height="18.21px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            position="absolute"
            top="6.25%"
            bottom="6.25%"
            left="6.25%"
            right="6.25%"
            borderRadius="32.52032470703125px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(254,94,85,1)"
            {...getOverrideProps(overrides, "Instagram/Thumbnails/161x161")}
          >
            <Image
              width="100%"
              height="100%"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              padding="0px 0px 0px 0px"
              objectFit="cover"
              {...getOverrideProps(overrides, "IMAGE_HERE")}
            ></Image>
          </View>
        </View>
      </Flex>
      <View
        width="125.5px"
        height="4.68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="5.61951208114624px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "iOS Home")}
      ></View>
    </Flex>
  );
}
