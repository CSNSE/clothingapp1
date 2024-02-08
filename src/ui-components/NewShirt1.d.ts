/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MyIconProps } from "./MyIcon";
import { ButtonProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NewShirt1OverridesProps = {
    NewShirt1?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "New Shirt"?: PrimitiveOverrideProps<TextProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    TextField3863609?: PrimitiveOverrideProps<TextFieldProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField3863583?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3863584?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NewShirt1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NewShirt1OverridesProps | undefined | null;
}>;
export default function NewShirt1(props: NewShirt1Props): React.ReactElement;
