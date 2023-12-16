import { Container, ContainerInput, Input } from "./styled";
import { RFValue } from "react-native-responsive-fontsize";
import { useState } from "react";
import { View } from "react-native";
import { InputComponentProps } from "@/types/shared/components/input";
import { LabelInputComponent, LabelInputErrorComponent } from "./labels";
import { IsIconShowPassComponents } from "./icons";

export function InputComponent({
  text,
  colorFont,
  fontSize,
  bgColor,
  border,
  bRadius,
  label,
  margin,
  padding,
  icon,
  height,
  secureTextEntry = false,
  errorLabel = "",
  ...props
}: InputComponentProps) {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const input = {
    bgColor,
    colorFont,
    border,
    margin,
    padding,
    bRadius,
    fontSize: RFValue(fontSize ?? 12),
    height,
  };

  return (
    <Container input={input}>
      {label && <LabelInputComponent />}
      <ContainerInput input={input}>
        {icon && <View style={{ paddingLeft: 20 }}>{icon}</View>}
        <Input input={input} secureTextEntry={showPassword} {...props} />
        {secureTextEntry && (
          <IsIconShowPassComponents
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}
      </ContainerInput>
      {errorLabel.length > 0 && <LabelInputErrorComponent label={errorLabel} />}
    </Container>
  );
}
