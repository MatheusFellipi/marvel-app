import { TextComponent } from "@/shared/components/text";
import { CharacteristicsContentProps } from "@/types/shared/components/characteristics";
import { View } from "react-native";

export const CharacteristicContentComponent = ({
  title,
  count,
}: CharacteristicsContentProps) => (
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
