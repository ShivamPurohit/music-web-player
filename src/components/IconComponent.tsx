import { ReactComponent as Home } from '../assets/svg/music-home-icon.svg'
import { ReactComponent as Library } from '../assets/svg/music-library-icon.svg'
import { ReactComponent as Next } from '../assets/svg/music-next-icon.svg'
import { ReactComponent as Pause } from '../assets/svg/music-pause-icon.svg'
import { ReactComponent as Play } from '../assets/svg/music-play-icon.svg'
import { ReactComponent as Previous } from '../assets/svg/music-previous-icon.svg'
import { ReactComponent as Search } from '../assets/svg/music-search-icon.svg'
import { SVGIconTypes } from "../types/common.types"



interface Props {
  icon: SVGIconTypes, 
    iconStyleConfig?: {base?: string, hover?: string} 
}

const SVGMap : {[key in SVGIconTypes]:{component:any}}={
  HOME: {
    component: Home
  },
  LIBRARY: {
    component: Library
  },
  NEXT: {
    component: Next
  },
  PREVIOUS: {
    component: Previous
  },
  PLAY: {
    component: Play
  },
  PAUSE: {
    component: Pause
  },
  SEARCH: {
    component: Search
  }
}

const IconComponent = ({icon,iconStyleConfig}:Props) => {
  const element = icon && SVGMap && SVGMap[icon] ? SVGMap[icon] : null;
  return element ? (<element.component className={`${iconStyleConfig?.base} hover:${iconStyleConfig?.hover}`}/>) : null;
}

export default IconComponent