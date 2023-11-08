import { IconConfigInterface, TextLinkProps } from "../types/component.types"
import TextLink from "./TextLink"

type AlignmentTypes = 'ROW' | 'COL' | 'ROW_REVERSE' | 'COL_REVERSE'

interface TextIconProps{
    textConfig: TextLinkProps,
    iconConfig: IconConfigInterface
    alignment?: AlignmentTypes
}

const TextIcon = ({textConfig,iconConfig,alignment='ROW'}:TextIconProps) => {
  const alignmentMap:{[key in AlignmentTypes]:string} = {
    ROW: "flex-col",
    COL: "flex",
    ROW_REVERSE: "flex-row-reverse",
    COL_REVERSE: "flex-col-reverse"
  }
  return (
    <div className={`flex ${alignmentMap[alignment]}`}>
      {/* <IconComponent {...iconConfig}/> */}
      <TextLink {...textConfig} />
    </div>
  )
}

export default TextIcon