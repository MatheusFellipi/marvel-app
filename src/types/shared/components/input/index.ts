import { ReactNode } from "react";
import { TextInputProps } from "react-native";

export type MarginOrPadding = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type InputComponentProps = {
  fontSize?: number;
  colorFont?: string;
  bgColor?: string;
  border?: string;
  bRadius?: string;
  height?: string;
  width?: number;
  label?: string;
  margin?: MarginOrPadding;
  padding?: MarginOrPadding;
  icon?: ReactNode;
  errorLabel?: string;
  inputRef?: any
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
