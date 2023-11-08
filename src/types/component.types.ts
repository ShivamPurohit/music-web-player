import { FontColorTypes, FontSizeTypes, FontWeightTypes, SVGIconTypes } from "./common.types";

export type CardColorTypes = 'BLACK' | 'BLACK_LIGHT' | 'WHITE';
export type TextTypes = 'TEXT' | 'LINK';
export type Sizes = 'XS' | 'SM' | 'MD' | 'LG' | 'XL' | 'FREE';

export interface TextLinkProps{
    text:string,
    type: TextTypes,
    href?: string,
    styleConfig?:{weight?:FontWeightTypes,size?:FontSizeTypes,color: FontColorTypes}
}

export interface IconConfigInterface {
    icon: SVGIconTypes, 
    iconStyleConfig?: {base?: string, hover?: string} 
}
