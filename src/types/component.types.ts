import {
  FontColorTypes,
  FontSizeTypes,
  FontWeightTypes,
  SVGIconTypes,
} from "./common.types";

export type CardColorTypes = "BLACK" | "BLACK_LIGHT" | "WHITE";
export type TextTypes = "TEXT" | "LINK";
export type Sizes = "XS" | "SM" | "MD" | "LG" | "XL" | "FREE" | "AUTO";
export type SongIconStatus = "IDLE" | "PLAY" | "PAUSE" | "LOADING";
export type AudioContainerTypes = "AUDIO_LIST" | "TILE_LIST";
export type PlayBackStateTypes =
  | "idle"
  | "playing"
  | "ended"
  | "ready"
  | "paused"
  | "stalled"
  | "error"
  | "buffering";
export type SongActionTypes =
  | "START_PLAYING"
  | "PAUSE_PLAYING"
  | "RESUME_PLAYING"
  | "STOP_PLAYING";
export type AudioIconBtnTypes = "DEFAULT" | "RIGHT_MARGIN";
export type AudioItemDisplayTypes = "HORIZONTAL_TILES" | "VERTICAL_TILES";
export interface ActionIconConfig {
  iconConfig: IconConfigInterface;
  callback: (songData: any, actionIcon: SVGIconTypes) => void;
  iconBtnType: AudioIconBtnTypes;
}

export interface TextLinkInterface {
  type?: TextTypes;
  href?: string;
  styleConfig?: {
    weight?: FontWeightTypes;
    size?: FontSizeTypes;
    color: FontColorTypes;
    lineClamp?: number;
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
  id: string;
  playStatus: PlayBackStateTypes;
}
