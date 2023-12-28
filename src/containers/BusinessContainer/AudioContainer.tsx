import { useState } from "react";
import AudioItem from "../../components/AudioItem";
import {
  AudioContainerTypes,
  IconConfigInterface,
  SongStatus,
  SongStatusInterface,
  TextLinkInterface,
} from "../../types/component.types";

interface AudioContainerInterface {
  data: any;
  displayConifg: { textStyleConfig: TextLinkInterface };
  containerConfig?: { variant: AudioContainerTypes };
}

const audioContainerVariantMap: { [key in AudioContainerTypes]: string } = {
  AUDIO_LIST:
    "mt-4 grid grid-cols-2 grid-rows-2 sm:grid-cols-1 gap-x-6 gap-y-6 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-3",
  TILE_LIST: "",
};

const AudioContainer = ({
  data,
  containerConfig,
  displayConifg,
}: AudioContainerInterface) => {
  const [songStatus, setSongStatus] = useState<SongStatusInterface>({
    id: null,
    playStatus: "IDLE",
  });
  const { variant = "AUDIO_LIST" } = containerConfig || {};

  const handleSongClick = (
    songItem: any,
    songPlayingStatus: SongStatusInterface
  ) => {
    if (
      songPlayingStatus?.playStatus === "PLAY" ||
      songPlayingStatus?.playStatus === "IDLE"
    ) {
      setSongStatus({ id: songItem?.id, playStatus: "PAUSE" });
    } else {
      setSongStatus({ id: songItem?.id, playStatus: "PLAY" });
    }
  };

  const displayIconConfigMap: { [key in SongStatus]: IconConfigInterface } = {
    PLAY: {
      icon: "PLAY",
      iconStyleConfig: { base: "flex text-green-500 h-8 w-8" },
    },
    PAUSE: {
      icon: "PAUSE",
      iconStyleConfig: { base: "flex text-green-500 h-8 w-8" },
    },
    LOADING: {
      icon: "LOADING",
      iconStyleConfig: { base: "flex text-green-500 h-8 w-8 animate-spin" },
    },
    IDLE: {
      icon: "PLAY",
      iconStyleConfig: { base: "flex text-green-500 h-8 w-8" },
    },
  };

  return (
    <div className={`${audioContainerVariantMap[variant]}`}>
      {data?.map((item: any) => (
        <AudioItem
          key={item?.id}
          textStyleConfig={displayConifg?.textStyleConfig}
          songData={item}
          onSongIconClick={handleSongClick}
          iconConfig={
            songStatus?.id === item?.id
              ? displayIconConfigMap[songStatus.playStatus]
              : displayIconConfigMap["IDLE"]
          }
        />
      ))}
    </div>
  );
};

export default AudioContainer;
