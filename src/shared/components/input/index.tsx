import {
  Container,
  ContainerInput,
  Input,
  TextError,
  TextLabels
  } from './styled';
import { InputComponentProps } from '@/types/shared/components/input';
import { IsIconShowPassComponents } from './icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useState } from 'react';
import { View } from 'react-native';

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
      {label && <TextLabels>{label}</TextLabels>}
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
      {errorLabel.length > 0 && <TextError>{errorLabel}</TextError>}
    </Container>
  );
}
