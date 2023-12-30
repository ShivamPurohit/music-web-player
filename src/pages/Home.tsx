import { useEffect, useState } from "react";
import LayoutCard from "../components/LayoutCard";
import TextLink from "../components/TextLink";
import { API_STATUS, EN_CONSTANTS } from "../constants/common.constants";
import AudioContainer from "../containers/BusinessContainer/AudioContainer";
import { TextLinkInterface } from "../types/component.types";

const audioTextStyleConfig: TextLinkInterface = {
  type: "TEXT",
  styleConfig: {
    color: "GREEN",
    size: "SM",
    weight: "SEMI_BOLD",
  },
};

const Home = () => {
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://saavn.me/search/songs?query=kun+faya+kun&page=1&limit=2"
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
              displayConifg={{ textStyleConfig: audioTextStyleConfig }}
              containerConfig={{ variant: "AUDIO_LIST" }}
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
