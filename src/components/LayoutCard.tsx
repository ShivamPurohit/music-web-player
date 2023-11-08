import { ReactNode } from "react";
import { BorderRadiusTypes } from "../types/common.types";
import { CardColorTypes, Sizes } from "../types/component.types";

interface LayoutCardProps{
    variant:  BorderRadiusTypes
    size: Sizes
    color: CardColorTypes
    margin?: {x:number, y:number, t?: number}
    children: ReactNode
}

const cardBorderRadiusMap:{ [key in BorderRadiusTypes] : string } = {
    DEFAULT: 'rounded-none',
    ROUNDED: 'rounded-full',
    ROUNDED_EDGE: 'rounded-md'
}

const cardColorMap:{[key in CardColorTypes]:string} = {
    BLACK: 'bg-black',
    BLACK_LIGHT: 'bg-zinc-900	',
    WHITE: 'bg-white'
}

const sizeMap:{[key in Sizes]:string} = {
  FREE: 'h-full w-full',
    XS: '',
    SM: '',
    MD: 'h-32 min-w-80',
    LG: 'h-full min-w-80',
    XL: ''
}

const marginYArr = ['my-0','my-1','my-2','my-3']
const marginXArr = ['mx-0','mx-1','mx-2','mx-3']
const margintArr = ['mt-0','mt-1','mt-2','mt-3']

const LayoutCard = ({variant,size,color,margin,children}:LayoutCardProps) => {
  return (
    <div className={`${cardBorderRadiusMap[variant]} ${cardColorMap[color]} ${sizeMap[size]} ${marginYArr[margin?.y as number]} ${marginXArr[margin?.x as number]} ${margintArr[margin?.t as number]}`}>
    {children}
    </div>
  )
}

export default LayoutCard