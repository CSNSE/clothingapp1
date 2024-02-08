/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, ImageProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InstagramNavigationBottomOverridesProps = {
    InstagramNavigationBottom?: PrimitiveOverrideProps<FlexProps>;
    Icons?: PrimitiveOverrideProps<FlexProps>;
    Home?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Search38691793?: PrimitiveOverrideProps<ViewProps>;
    Search38691794?: PrimitiveOverrideProps<IconProps>;
    "Add Icon Filled"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 1427 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    Union38691797?: PrimitiveOverrideProps<IconProps>;
    "Vector (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Vector (Stroke) (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    Shop?: PrimitiveOverrideProps<ViewProps>;
    Union38691801?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 1428 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Vector 5 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    "Vector 6 (Stroke)"?: PrimitiveOverrideProps<IconProps>;
    Avatar?: PrimitiveOverrideProps<ViewProps>;
    "Instagram/Thumbnails/161x161"?: PrimitiveOverrideProps<ViewProps>;
    IMAGE_HERE?: PrimitiveOverrideProps<ImageProps>;
    "iOS Home"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type InstagramNavigationBottomProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: InstagramNavigationBottomOverridesProps | undefined | null;
}>;
export default function InstagramNavigationBottom(props: InstagramNavigationBottomProps): React.ReactElement;
