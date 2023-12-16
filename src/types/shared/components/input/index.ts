import { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { TextComponentsProps } from "../text";

export type MarginOrPadding = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type InputComponentProps = {
  text?: TextComponentsProps;
  fontSize?: number;
  colorFont?: string;
  bgColor?: string;
  border?: string;
  bRadius?: string;
  height?: string;
  label?: string;
  margin?: MarginOrPadding;
  padding?: MarginOrPadding;
  icon?: ReactNode;
  errorLabel?: string;
} & TextInputProps;

export type InputContainerComponentProps = {
  bgColor?: string;
  border?: string;
  width?: string;
  bRadius?: string;
  height?: string;
  margin?: MarginOrPadding;
  padding?: MarginOrPadding;
} & TextInputProps;
