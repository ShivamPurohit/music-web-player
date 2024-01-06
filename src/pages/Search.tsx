import { useState } from "react";
import LayoutCard from "../components/LayoutCard";
import TextLink from "../components/TextLink";
import { API_STATUS, EN_CONSTANTS } from "../constants/common.constants";
import AudioContainer from "../containers/BusinessContainer/AudioContainer";
import SearchInputContainer from "../containers/SearchInputContainer";
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
const Search = () => {
  const [data, setData] = useState<any>({});
  const { library, addToLib } = useLibrary();
  const fetchData = async (query: string) => {
    try {
      const response = await fetch(
        `https://saavn.me/search/songs?query=${query}l&page=1&limit=15`
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
  const handleSearch = (value: string) => {
    fetchData(value);
  };

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
    <div className="flex flex-col h-full w-full">
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="SM"
        color="DARK_BG"
        margin={{ y: 0, x: 3 }}>
        <SearchInputContainer onSearch={handleSearch} />
      </LayoutCard>
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="FREE"
        color="DARK_BG"
        margin={{ y: 0, x: 3, t: 3 }}>
        {data.status === API_STATUS.SUCCESS ? (
          <div className="h-full w-full p-4">
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

export default Search;
