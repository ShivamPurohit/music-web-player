import { useEffect, useState } from "react";
import LayoutCard from "../components/LayoutCard";
import TextLink from "../components/TextLink";
import { API_STATUS, EN_CONSTANTS } from "../constants/common.constants";
import AudioContainer from "../containers/BusinessContainer/AudioContainer";
import { useLibrary } from "../hooks/useLibrary.hook";
import { SVGIconTypes } from "../types/common.types";
import { TextLinkInterface } from "../types/component.types";

const audioTextStyleConfig: TextLinkInterface = {
  type: "TEXT",
  styleConfig: {
    color: "GREEN",
    size: "SM",
    weight: "BOLD",
    lineClamp: 1,
  },
};

const Home = () => {
  const [data, setData] = useState<any>({});
  const { library, addToLib } = useLibrary();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://saavn.me/search/songs?query=animal&page=1&limit=10"
        );
        if (!response.ok) {
          throw new Error("Network response  was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log("err", err);
      }
    };
    fetchData();
  }, []);

  const handleAddToLibraryClick = (songItem: any, actionIcon: SVGIconTypes) => {
    if (actionIcon === "ADD_MUSIC") {
      const isSongAlreadyInTheLibrary = library?.find(
        (item: any) => item?.id === songItem?.id
      );
      if (!isSongAlreadyInTheLibrary) {
        addToLib(songItem);
      }
    }
  };

  return (
    <div className="flex h-full w-full">
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="FREE"
        color="BLACK_LIGHT"
        margin={{ y: 0, x: 3 }}>
        {data.status === API_STATUS.SUCCESS ? (
          <div className="h-full w-full p-4">
            <TextLink
              text={EN_CONSTANTS.MUSIC_PAGE_HEADING}
              type="TEXT"
              styleConfig={{
                weight: "EXTRA_BOLD",
                color: "GREEN",
                size: "BASE",
              }}
            />
            <TextLink
              text={EN_CONSTANTS.MUSIC_PLAYER_BACKED_LIBRARY}
              type="LINK"
              styleConfig={{
                weight: "EXTRA_BOLD",
                color: "GREEN",
                size: "BASE",
              }}
              href="https://github.com/afkcodes/audio_x"
            />
            <AudioContainer
              data={data?.data?.results}
              displayConifg={{
                textStyleConfig: audioTextStyleConfig,
                imageStyleClass: "rounded-l-lg",
              }}
              containerConfig={{ variant: "AUDIO_LIST" }}
              actionIconConfig={[
                {
                  callback: handleAddToLibraryClick,
                  iconBtnType: "CENTER_ALIGNED",
                  iconConfig: {
                    icon: "ADD_MUSIC",
                    iconStyleConfig: {
                      base: '"text-green-500 h-3 w-3 md:h-6 md:w-6',
                    },
                  },
                },
              ]}
            />
          </div>
        ) : (
          <div className="h-full w-full p-4">
            <TextLink
              text={EN_CONSTANTS.MUSIC_LOADING}
              type={"TEXT"}
              styleConfig={{
                weight: "EXTRA_BOLD",
                color: "GREEN",
                size: "BASE",
              }}
            />
          </div>
        )}
      </LayoutCard>
    </div>
  );
};

export default Home;
