import { CardCarrosselComponent } from "./list";
import { PropsCarrossel } from "@/types/shared/components/carrossel";
import { SkeletonCarrosselComponent } from "./skeleton";
import { SubtitleText } from "./styles";
import { View } from "react-native";
import { TextComponent } from "../text";

export const CarrosselComponent = ({
  loader,
  data,
  handleRoute,
  title,
  color,
}: PropsCarrossel) => {
  return (
    <View>
      <SubtitleText color={color}>{title}</SubtitleText>
      {loader && <SkeletonCarrosselComponent  colorMode="dark"/>}
      {!loader && data?.length === 0 && (
        <TextComponent
          TextColor="white"
          fontFamily="Poppins_500Medium"
          margin={{
            left: 24,
          }}
          style={{
            textAlign: "justify",
            minHeight: 140,
          }}
          fontSize={12}
        >
          Desculpe, não há dados disponíveis para os {title} neste momento.
        </TextComponent>
      )}
      {!loader && (
        <CardCarrosselComponent handleRoute={handleRoute} data={data} />
      )}
    </View>
  );
};
