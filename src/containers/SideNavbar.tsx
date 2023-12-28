import LayoutCard from "../components/LayoutCard";
import TextIcon from "../components/TextIcon";
import { IconConfigInterface } from "../types/component.types";

const SideNavbar = () => {
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
      name: "Home",
      iconConfig: {
        icon: "HOME",
        iconStyleConfig: { base: "text-green-500 mr-4" },
      },
    },
    {
      indexKey: 2,
      path: "/search",
      name: "Search",
      iconConfig: {
        icon: "SEARCH",
        iconStyleConfig: { base: "text-green-500 mr-4" },
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <LayoutCard
        variant="ROUNDED_EDGE"
        size="MD"
        color="BLACK_LIGHT"
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
        color="BLACK_LIGHT"
        margin={{ y: 0, x: 0, t: 2 }}>
        <div className="flex justify-center p-4">
          <TextIcon
            textConfig={{
              text: "YOUR LIBRARY",
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
      </LayoutCard>
    </div>
  );
};

export default SideNavbar;
