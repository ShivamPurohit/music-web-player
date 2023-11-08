import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FontColorTypes, FontSizeTypes, FontWeightTypes } from '../types/common.types'
import { TextLinkProps } from '../types/component.types'



const fontWeightMap:{[key in FontWeightTypes]:string}={
  LIGHT: 'font-light',
  NORMAL: 'font-normal',
  MEDIUM: 'font-medium',
  SEMI_BOLD: 'font-semibold',
  BOLD: 'font-bold',
  EXTRA_BOLD: 'font-extrabold'
}

const fontSizeMap:{[key in FontSizeTypes]:string} = {
  XS: 'text-xs',
  SM: 'text-sm',
  BASE: 'text-base',
  LG: 'text-lg',
  XL: 'text-xl',
  '2XL': 'text-2xl'
}

const fontColorMap:{[key in FontColorTypes]:string} ={
  WHITE: 'text-white',
  GREEN: 'text-green-500',
  GRAY: 'text-gray-500',
  BLACK: 'text-black'
}

const TextLink = ({text,type,href,styleConfig}:TextLinkProps) => {
    const {weight='NORMAL',size='BASE',color='WHITE'} = styleConfig || {}
  return (
    <Fragment>
        {type === 'TEXT' ? <p className={`${fontWeightMap[weight]}  ${fontSizeMap[size]} ${fontColorMap[color]}`}>{text}</p> : null}
        {type === 'LINK' ? <Link to={`${href}`} className={`${fontWeightMap[weight]} ${fontSizeMap[size]} ${fontColorMap[color]}`}> {text}</Link>:null}
    </Fragment>
  )
}

export default TextLink