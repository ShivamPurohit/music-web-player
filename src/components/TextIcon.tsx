import { IconConfigInterface, TextLinkProps } from "../types/component.types";
import IconComponent from "./IconComponent";
import TextLink from "./TextLink";

type AlignmentTypes = "ROW" | "COL" | "ROW_REVERSE" | "COL_REVERSE";

interface TextIconProps {
  textConfig: TextLinkProps;
  iconConfig: IconConfigInterface;
  alignment?: AlignmentTypes;
}

const alignmentMap: { [key in AlignmentTypes]: string } = {
  ROW: "",
  COL: "flex-col",
  ROW_REVERSE: "flex-row-reverse",
  COL_REVERSE: "flex-col-reverse",
};

const TextIcon = ({
  textConfig,
  iconConfig,
  alignment = "ROW",
}: TextIconProps) => {
  return (
    <div className={`flex items-center ${alignmentMap[alignment]}`}>
      <IconComponent {...iconConfig} />
      <TextLink {...textConfig} />
    </div>
  );
};

export default TextIcon;
