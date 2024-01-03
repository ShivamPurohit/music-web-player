import { SVGIconTypes } from "../types/common.types";
import {
  ActionIconConfig,
  AudioIconBtnTypes,
  AudioItemDisplayTypes,
  IconConfigInterface,
  TextLinkInterface,
} from "../types/component.types";
import IconComponent from "./IconComponent";
import TextLink from "./TextLink";

interface AudioItemProps {
  displayConifg: {
    textStyleConfig: TextLinkInterface;
    audioItemDisplayType?: AudioItemDisplayTypes;
  };
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
  const { textStyleConfig, audioItemDisplayType = "HORIZONTAL_TILES" } =
    displayConifg;
  const IconBtnStyleMap: { [key in AudioIconBtnTypes]: string } = {
    DEFAULT: "",
    RIGHT_MARGIN: "flex items-center justify-end mr-4",
  };
  const displayAudioItemsMap: { [key in AudioItemDisplayTypes]: string } = {
    HORIZONTAL_TILES: " h-14 md:h-20 bg-gray-800 rounded-md flex",
    VERTICAL_TILES: "h-14 md:h-16 mt-4 mx-4 bg-gray-600 rounded-md flex",
  };
  return (
    <div className={`${displayAudioItemsMap[audioItemDisplayType]}`}>
      <img src={`${songData?.image[1]?.link}`} className="rounded-md" />
      <div className="flex items-center ml-4 w-full">
        <div className="flex w-full">
          <TextLink text={songData?.name} {...textStyleConfig} />
        </div>

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
  );
};

export default AudioItem;
