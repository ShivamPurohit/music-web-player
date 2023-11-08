import LayoutCard from "../components/LayoutCard";
import TextIcon from "../components/TextIcon";
import { IconConfigInterface } from "../types/component.types";


const SideNavbar = () => {
interface RouteInterface {
  indexKey: number,
  path: string,
  name: string
  iconConfig:IconConfigInterface
}
  const tabRoutes: RouteInterface[] = [
    {indexKey: 1, path: '/', name: 'Home', iconConfig: {icon : 'HOME', iconStyleConfig: {}}},
    {indexKey: 2, path: '/search', name: 'Search',  iconConfig: {icon : 'SEARCH', iconStyleConfig: {}}}
  ];
  // const libraryRoutes = [];

  return (
    <div className="flex flex-col">
      <LayoutCard variant='ROUNDED_EDGE' size="MD" color="BLACK_LIGHT" margin={{ y: 0, x: 0, t: 0 }}>
        {tabRoutes?.map((routeItem:RouteInterface)=>{return (
          <div className="flex flex-col" key={routeItem?.indexKey}>
            <TextIcon textConfig={{text:routeItem?.name, type: 'LINK', href:routeItem?.path, styleConfig:{color:'GREEN',weight:'BOLD',size:'BASE'}}} iconConfig={{...routeItem?.iconConfig}} />
          </div>
        )}) }
      </LayoutCard>
      <LayoutCard variant='ROUNDED_EDGE' size="LG" color="BLACK_LIGHT" margin={{ y: 0, x: 0, t: 2 }}>
              <div className="text-green-500">Your Library </div>
          </LayoutCard>
      </div>
  )
}

export default SideNavbar