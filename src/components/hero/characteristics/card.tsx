import { TextComponent } from "@/shared/components/text";
import { View } from "react-native";

type Props = {
  title?: string;
  count?: number;
};

export const CardCharacComponent = ({ title, count }: Props) => (
  <View>
    <TextComponent
      TextColor="white"
      fontFamily="Poppins_900Black"
      fontSize={20}
      style={{ textAlign: "center" }}
    >
      {count}
    </TextComponent>
    <TextComponent
      TextColor="white"
      fontFamily="Poppins_500Medium"
      fontSize={12}
      style={{ textAlign: "center" }}
    >
      {title}
    </TextComponent>
  </View>
);
