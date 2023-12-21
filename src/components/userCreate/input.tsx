import { InputComponent } from "@/shared/components/input";

type Props = {
  value: string;
  label: string;
  secureTextEntry: boolean;
  errors: string;
  onChangeText: (text: string) => void;
};

export const InputCreateComponent = ({
  label,
  errors,
  value,
  onChangeText,
  secureTextEntry,
}: Props) => (
  <InputComponent
    accessible={true}
    accessibilityLabel={label}
    focusable
    errorLabel={errors}
    margin={{
      top: 20,
    }}
    secureTextEntry={secureTextEntry}
    height="55px"
    label={label}
    placeholder={label}
    onChangeText={onChangeText}
    value={value}
  />
);
