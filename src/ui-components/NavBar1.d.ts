/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavBar1OverridesProps = {
    NavBar1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 5"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83C\uDFE0"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDC55"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDC56"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDC5F"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NavBar1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBar1OverridesProps | undefined | null;
}>;
export default function NavBar1(props: NavBar1Props): React.ReactElement;
