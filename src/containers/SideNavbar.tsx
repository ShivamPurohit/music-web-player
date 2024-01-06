import LayoutCard from "../components/LayoutCard";
import TextIcon from "../components/TextIcon";
import {
  EN_CONSTANTS,
  NAV_ROUTES_CONSTANTS,
} from "../constants/common.constants";
import { useLibrary } from "../hooks/useLibrary.hook";
import { SVGIconTypes } from "../types/common.types";
import { IconConfigInterface } from "../types/component.types";
import AudioContainer from "./BusinessContainer/AudioContainer";

const SideNavbar = () => {
  const { library, removeFromLib } = useLibrary();

  interface RouteInterface {
    indexKey: number;
    path: string;
    name: string;
    iconConfig: IconConfigInterface;
  }
  const tabRoutes: RouteInterface[] = [
    {
      indexKey: 1,
      path: "/",
      name: NAV_ROUTES_CONSTANTS.HOME,
      iconConfig: {
        icon: "HOME",
        iconStyleConfig: { base: "text-green-500 mr-4" },
      },
    },
    {
      indexKey: 2,
      path: "/search",
      name: NAV_ROUTES_CONSTANTS.SEARCH,
      iconConfig: {
        icon: "SEARCH",
        iconStyleConfig: { base: "text-green-500 mr-4" },
      },
    },
  ];

  const handleRemoveFromLibrary = (songItem: any, actionIcon: SVGIconTypes) => {
    if (actionIcon === "REMOVE") {
      removeFromLib(songItem?.id);
    }
  };

  return (
    <div className="flex flex-col">
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="MD"
        color="DARK_BG"
        margin={{ y: 0, x: 0, t: 0 }}>
        <div className="flex flex-col p-4">
          {tabRoutes?.map((routeItem: RouteInterface) => {
            return (
              <div
                className="flex flex-col mb-4 last:mb-0"
                key={routeItem?.indexKey}>
                <TextIcon
                  textConfig={{
                    text: routeItem?.name,
                    type: "LINK",
                    href: routeItem?.path,
                    styleConfig: {
                      color: "GREEN",
                      weight: "BOLD",
                      size: "BASE",
                    },
                  }}
                  iconConfig={{ ...routeItem?.iconConfig }}
                />
              </div>
            );
          })}
        </div>
      </LayoutCard>
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="LG"
        color="DARK_BG"
        margin={{ y: 0, x: 0, t: 2 }}>
        <div className="flex justify-center p-4">
          <TextIcon
            textConfig={{
              text: EN_CONSTANTS.YOUR_LIBRARY,
              type: "TEXT",
              styleConfig: {
                color: "GREEN",
                weight: "BOLD",
                size: "BASE",
              },
            }}
            iconConfig={{
              icon: "LIBRARY",
              iconStyleConfig: { base: "text-green-500 mr-4 " },
            }}
          />
        </div>
        <AudioContainer
          data={library}
          displayConifg={{
            textStyleConfig: {
              type: "TEXT",
              styleConfig: {
                color: "GREEN",
                lineClamp: 2,
                size: "SM",
                weight: "SEMI_BOLD",
              },
            },
            audioItemDisplayType: "VERTICAL_TILES",
            imageStyleClass: "rounded-full",
          }}
          containerConfig={{ variant: "TILE_LIST" }}
          actionIconConfig={[
            {
              callback: handleRemoveFromLibrary,
              iconBtnType: "CENTER_ALIGNED",
              iconConfig: {
                icon: "REMOVE",
                iconStyleConfig: {
                  base: '"text-green-500 h-4 w-4 md:h-6 md:w-6',
                },
              },
            },
          ]}
        />
      </LayoutCard>
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="AUTO"
        color="DARK_BG"
        margin={{ y: 0, x: 0, t: 2 }}>
        <div className="flex justify-center p-4">
          <TextIcon
            textConfig={{
              text: EN_CONSTANTS.DEVELOPER_NAME,
              type: "LINK",
              href: "https://github.com/ShivamPurohit/music-web-player/",
              styleConfig: {
                color: "GREEN",
                weight: "BOLD",
                size: "BASE",
              },
            }}
            iconConfig={{
              icon: "CLOSING_TAG",
              iconStyleConfig: { base: "text-green-500 mr-4 " },
            }}
          />
        </div>
      </LayoutCard>
    </div>
  );
};

export default SideNavbar;
