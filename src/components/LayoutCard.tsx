import { ReactNode } from "react";
import "../css/scrollbar.css";
import { BorderRadiusTypes } from "../types/common.types";
import { CardColorTypes, Sizes } from "../types/component.types";

interface LayoutCardProps {
  variant: BorderRadiusTypes;
  isVerticalScrollable?: boolean;
  size: Sizes;
  color: CardColorTypes;
  margin?: { x: number; y: number; t?: number };
  children: ReactNode;
}

const cardBorderRadiusMap: { [key in BorderRadiusTypes]: string } = {
  DEFAULT: "rounded-none",
  ROUNDED: "rounded-full",
  ROUNDED_EDGE: "rounded-md",
};

const cardColorMap: { [key in CardColorTypes]: string } = {
  BLACK: "bg-black",
  BLACK_LIGHT: "bg-zinc-900	",
  WHITE: "bg-white",
  DARK_BG: "bg-galaxy-img bg-cover",
};

const sizeMap: { [key in Sizes]: string } = {
  FREE: "h-full w-full",
  XS: "",
  SM: "h-20 w-full",
  MD: "h-32 w-32 md:h-32 md:min-w-80",
  LG: "h-full w-32 md:h-full md:min-w-80",
  XL: "",
  AUTO: "h-auto w-auto",
};

const marginYArr = ["my-0", "my-1", "my-2", "my-3"];
const marginXArr = ["mx-0", "mx-1", "mx-2", "mx-3"];
const margintArr = ["mt-0", "mt-1", "mt-2", "mt-3"];

const LayoutCard = ({
  variant,
  size,
  color,
  margin,
  children,
  isVerticalScrollable = false,
}: LayoutCardProps) => {
  return (
    <div
      className={`${
        isVerticalScrollable ? "custom-scrollbar overflow-y-auto" : ""
      } ${cardBorderRadiusMap[variant]} ${cardColorMap[color]} ${
        sizeMap[size]
      } ${marginYArr[margin?.y as number]} ${marginXArr[margin?.x as number]} ${
        margintArr[margin?.t as number]
      }`}>
      {children}
    </div>
  );
};

export default LayoutCard;
