import { AudioX } from "audio_x";
import { useEffect, useState } from "react";
import AudioItem from "../../components/AudioItem";
import { SVGIconTypes } from "../../types/common.types";
import {
  ActionIconConfig,
  AudioContainerTypes,
  AudioDisplayConfigInterface,
  IconConfigInterface,
  PlayBackStateTypes,
  SongStatusInterface,
} from "../../types/component.types";
import { createTrack } from "../../utils/createTrack";

interface AudioContainerInterface {
  data: any;
  displayConifg: AudioDisplayConfigInterface;
  containerConfig?: { variant: AudioContainerTypes };
  actionIconConfig?: ActionIconConfig[];
}

const audioContainerVariantMap: { [key in AudioContainerTypes]: string } = {
  AUDIO_LIST:
    "mt-4 grid gap-x-6 gap-y-6 grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-3",
  TILE_LIST: "",
};

const displayIconConfigMap: {
  [key in PlayBackStateTypes]: IconConfigInterface;
} = {
  playing: {
    icon: "PAUSE",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
  paused: {
    icon: "RESUME",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
  buffering: {
    icon: "LOADING",
    iconStyleConfig: {
      base: "flex text-green-500 animate-spin h-6 w-6 md:h-12 md:w-12",
    },
  },
  idle: {
    icon: "PLAY",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
  ended: {
    icon: "PLAY",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
  ready: {
    icon: "PAUSE",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
  stalled: {
    icon: "PLAY",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
  error: {
    icon: "PLAY",
    iconStyleConfig: { base: "flex text-green-500 h-4 w-4 md:h-8 md:w-8" },
  },
};

const AudioContainer = ({
  data,
  containerConfig,
  displayConifg,
  actionIconConfig,
}: AudioContainerInterface) => {
  const [songStatus, setSongStatus] = useState<SongStatusInterface>({
    id: "",
    playStatus: "idle",
  });
  const { variant = "AUDIO_LIST" } = containerConfig || {};
  const audio = new AudioX();
  audio.subscribe("AUDIO_X_STATE", (data: any) => {
    setSongStatus((prev) =>
      data?.currentTrack?.id !== prev.id ||
      data?.playbackState !== prev.playStatus
        ? {
            id: data?.currentTrack?.id,
            playStatus: data?.playbackState,
          }
        : prev
    );
  });

  useEffect(() => {
    // Initialize audio_x
    audio.init({
      autoPlay: false, // should auto play
      useDefaultEventListeners: true, // use Default event listeners
      showNotificationActions: true, // show notifications on devices
      preloadStrategy: "auto", // preloading strategy //auto': means media content will be preloaded as much as possible until the player buffer is full.
      playbackRate: 1, // set playback rate //  property sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth.
      enablePlayLog: false, // enable playlog support
      enableHls: true, // enable hls support
      hlsConfig: { backBufferLength: 2000 },
      mode: "REACT",
    });
  }, []);

  const handleSongClick = (songItem: any, actionIcon: SVGIconTypes) => {
    switch (actionIcon) {
      case "PLAY": {
        //"START_PLAYING"
        const track = createTrack(songItem);
        audio.addMedia(track);
        audio.play();
        break;
      }
      case "PAUSE": {
        //"PAUSE_PLAYING"
        audio.pause();
        break;
      }
      case "RESUME": {
        //"RESUME_PLAYING"
        audio.play();
        break;
      }
      default: {
        //"STOP_PLAYING"
        audio.stop();
      }
    }
  };

  const getActionIconsConfig = (
    itemId: string | number | null
  ): IconConfigInterface => {
    const songIconConfig =
      songStatus?.id === itemId
        ? displayIconConfigMap[songStatus.playStatus]
        : displayIconConfigMap["idle"];
    return songIconConfig;
  };

  return (
    <div className={`${audioContainerVariantMap[variant]}`}>
      {data?.map((item: any) => (
        <AudioItem
          key={item?.id}
          displayConifg={displayConifg}
          songData={item}
          songPlayConfig={{
            onSongIconClick: handleSongClick,
            iconBtnType: "START_ALIGNED",
            iconConfig: getActionIconsConfig(item?.id),
          }}
          actionIcons={actionIconConfig}
        />
      ))}
    </div>
  );
};

export default AudioContainer;
