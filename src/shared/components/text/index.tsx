import { RFValue } from "react-native-responsive-fontsize";
import { Text } from "./styled";
import { TextComponentsProps } from "@/types/shared/components/text";

export function TextComponent({
  fontSize = 16,
  TextColor,
  fontFamily,
  margin,
  padding,
  uppercase,
  textTransform = "none",
  maxWidth,
  children,
  ...props
}: TextComponentsProps) {
  const text = {
    fontSize: RFValue(fontSize),
    fontFamily: fontFamily,
    TextColor,
    uppercase: uppercase,
    maxWidth: maxWidth,
    textTransform,
    margin,
    padding,
  };

  return (
    <Text text={text} accessible={true} {...props}>
      {children}
    </Text>
  );
}
