import { TextBlack, TextDescription } from "@/shared/style/font";
import { CharacteristicsContentProps } from "@/types/shared/components/characteristics";
import { View } from "react-native";

export const CharacteristicContentComponent = ({
  title,
  count,
}: CharacteristicsContentProps) => (
  <View>
    <TextBlack size={20} style={{ textAlign: "center" }}>
      {count}
    </TextBlack>
    <TextDescription size={12} style={{ textAlign: "center" }}>
      {title}
    </TextDescription>
  </View>
);
