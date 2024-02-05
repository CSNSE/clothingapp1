/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ShirtCard2OverridesProps = {
    ShirtCard2?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    MyIcon3849853?: MyIconProps;
    edit?: PrimitiveOverrideProps<ViewProps>;
    MyIcon3849854?: MyIconProps;
    "Text Grouping"?: PrimitiveOverrideProps<FlexProps>;
    Brand?: PrimitiveOverrideProps<TextProps>;
    Type?: PrimitiveOverrideProps<TextProps>;
    Size?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ShirtCard2Props = React.PropsWithChildren<Partial<FlexProps> & {
    shirt2?: any;
} & {
    overrides?: ShirtCard2OverridesProps | undefined | null;
}>;
export default function ShirtCard2(props: ShirtCard2Props): React.ReactElement;
