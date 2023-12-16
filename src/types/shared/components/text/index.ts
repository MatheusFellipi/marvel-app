import { FontsType } from "@/types/shared/config/font";
import { ReactNode } from "react";
import { TextProps } from "react-native";

type MarginOrPadding = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

type TextTransform =
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "full-width"
  | "full-size-kana";

export type TextComponentsProps = {
  children?: ReactNode;
  fontSize?: number;
  uppercase?: boolean;
  fontFamily?: FontsType;
  textTransform?: TextTransform;
  TextColor?: string;
  margin?: MarginOrPadding;
  padding?: MarginOrPadding;
  maxWidth?: number;
} & TextProps;
