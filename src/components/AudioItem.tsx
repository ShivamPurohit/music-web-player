import { memo } from "react";
import { SVGIconTypes } from "../types/common.types";
import {
  ActionIconConfig,
  AudioDisplayConfigInterface,
  AudioIconBtnTypes,
  AudioItemDisplayTypes,
  IconConfigInterface,
} from "../types/component.types";
import IconComponent from "./IconComponent";
import TextLink from "./TextLink";

interface AudioItemProps {
  displayConifg: AudioDisplayConfigInterface;
  songData: any;
  actionIcons?: ActionIconConfig[];
  songPlayConfig: {
    onSongIconClick: (songItem: any, actionIcon: SVGIconTypes) => void;
    iconConfig: IconConfigInterface;
    iconBtnType: AudioIconBtnTypes;
  };
}

const AudioItem = ({
  displayConifg,
  songData,
  actionIcons,
  songPlayConfig,
}: AudioItemProps) => {
  const {
    textStyleConfig,
    audioItemDisplayType = "HORIZONTAL_TILES",
    imageStyleClass = "",
  } = displayConifg;
  const IconBtnStyleMap: { [key in AudioIconBtnTypes]: string } = {
    DEFAULT: "",
    CENTER_ALIGNED: "flex items-center justify-center w-full",
    START_ALIGNED: "flex items-center justify-start w-full",
  };
  const displayAudioItemsMap: { [key in AudioItemDisplayTypes]: string } = {
    HORIZONTAL_TILES: " h-14 md:h-20 bg-gray-800 rounded-lg flex",
    VERTICAL_TILES:
      "h-14 md:h-16 mt-4 mx-4 bg-gray-600 rounded-l-full rounded-r-full flex",
  };
  return (
    <div className={`${displayAudioItemsMap[audioItemDisplayType]}`}>
      <img
        src={`${songData?.image[1]?.link}`}
        className={`${imageStyleClass}`}
      />
      <div className="flex items-center ml-4 w-full">
        <div className="flex max-w-28 min-w-28">
          <TextLink text={songData?.name} {...textStyleConfig} />
        </div>
        <div className="flex w-full">
          {/* Action icon button */}
          {actionIcons?.map((iconProperty: ActionIconConfig) => (
            <button
              key={Math.random()}
              onClick={() =>
                iconProperty.callback(songData, iconProperty.iconConfig.icon)
              }
              className={IconBtnStyleMap[iconProperty.iconBtnType]}>
              <IconComponent {...iconProperty?.iconConfig} />
            </button>
          ))}

          {/* Song button */}
          <button
            key={Math.random()}
            onClick={() =>
              songPlayConfig.onSongIconClick(
                songData,
                songPlayConfig.iconConfig.icon
              )
            }
            className={IconBtnStyleMap[songPlayConfig.iconBtnType]}>
            <IconComponent {...songPlayConfig?.iconConfig} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(AudioItem);
