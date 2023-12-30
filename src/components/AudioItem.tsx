import { memo } from "react";
import {
  IconConfigInterface,
  SongActionTypes,
  TextLinkInterface,
} from "../types/component.types";
import IconComponent from "./IconComponent";
import TextLink from "./TextLink";

interface AudioItemProps {
  textStyleConfig: TextLinkInterface;
  songData: any;
  iconConfig: IconConfigInterface;
  onSongIconClick: (songItem: any, songAction: SongActionTypes) => void;
}

const AudioItem = ({
  textStyleConfig,
  songData,
  iconConfig,
  onSongIconClick,
}: AudioItemProps) => {
  const handleSongClick = () => {
    let playStatus: SongActionTypes = "STOP_PLAYING";
    switch (iconConfig?.icon) {
      case "PLAY": {
        playStatus = "START_PLAYING";
        break;
      }
      //resume
      // case "PAUSE": {
      //   playStatus = "STOP_PLAYING";
      //   break;
      // }
      default: {
        playStatus = "STOP_PLAYING";
      }
    }
    onSongIconClick(songData, playStatus);
  };

  return (
    <div className="w-full h-20 bg-gray-500 rounded-md flex">
      <img src={`${songData?.image[1]?.link}`} className="rounded-md" />
      <div className="flex items-center ml-4 w-full">
        <div className="flex w-full">
          <TextLink text={songData?.name} {...textStyleConfig} />
        </div>
        <button
          onClick={handleSongClick}
          className="flex items-center justify-end mr-4">
          <IconComponent {...iconConfig} />
        </button>
      </div>
    </div>
  );
};

export default memo(AudioItem);
