import {
  FontColorTypes,
  FontSizeTypes,
  FontWeightTypes,
  SVGIconTypes,
} from "./common.types";

export type CardColorTypes = "BLACK" | "BLACK_LIGHT" | "WHITE";
export type TextTypes = "TEXT" | "LINK";
export type Sizes = "XS" | "SM" | "MD" | "LG" | "XL" | "FREE";
export type SongStatus = "IDLE" | "PLAY" | "PAUSE" | "LOADING";
export type AudioContainerTypes = "AUDIO_LIST" | "TILE_LIST";

export interface TextLinkInterface {
  type?: TextTypes;
  href?: string;
  styleConfig?: {
    weight?: FontWeightTypes;
    size?: FontSizeTypes;
    color: FontColorTypes;
  };
}

export interface TextLinkProps extends TextLinkInterface {
  text: string;
}

export interface IconConfigInterface {
  icon: SVGIconTypes;
  iconStyleConfig?: { base?: string; hover?: string };
}

export interface ClickConfig {
  onTileClick?: (data: any) => void;
  onActionIconClick?: (data: any) => void;
}

export interface SongStatusInterface {
  id: string | number | null;
  playStatus: SongStatus;
}
