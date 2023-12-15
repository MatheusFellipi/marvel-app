import { TextComponentsProps } from "@/types/components/text";
import { TextComponent } from "../text";

type Props = {
  label?: string;
  text?: TextComponentsProps;
};

export const LabelInputComponent = ({ label, ...text }: Props) => (
  <TextComponent
    margin={{
      bottom: 10,
    }}
    {...text}
  >
    {label}
  </TextComponent>
);

export const LabelInputErrorComponent = ({ label }: Props) => (
  <TextComponent
    TextColor="red"
    margin={{
      top: -10,
    }}
    padding={{
      left: 20,
    }}
    fontSize={10}
    fontFamily="Poppins_400Regular"
  >
    {label}
  </TextComponent>
);
