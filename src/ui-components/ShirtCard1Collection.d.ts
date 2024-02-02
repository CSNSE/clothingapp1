/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ShirtCard1Props } from "./ShirtCard1";
import { CollectionProps } from "@aws-amplify/ui-react";
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
export declare type ShirtCard1CollectionOverridesProps = {
    ShirtCard1Collection?: PrimitiveOverrideProps<CollectionProps>;
    ShirtCard1?: ShirtCard1Props;
} & EscapeHatchProps;
export declare type ShirtCard1CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => ShirtCard1Props;
} & {
    overrides?: ShirtCard1CollectionOverridesProps | undefined | null;
}>;
export default function ShirtCard1Collection(props: ShirtCard1CollectionProps): React.ReactElement;
