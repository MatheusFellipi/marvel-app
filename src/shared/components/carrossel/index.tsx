import { CardCarrosselComponent } from "./list";
import { PropsCarrossel } from "@/types/shared/components/carrossel";
import { SkeletonCarrosselComponent } from "./skeleton";
import { SubtitleText } from "./styles";
import { View } from "react-native";
import { AlertText } from "@/shared/style/font";

export const CarrosselComponent = ({
  loader,
  data,
  handleRoute,
  title,
  color,
}: PropsCarrossel) => {
  return (
    <View>
      <SubtitleText
        color={color}
        accessibilityLabel={`Título do carrossel: ${title}`}
      >
        {title}
      </SubtitleText>
      {loader && <SkeletonCarrosselComponent colorMode="dark" />}
      {!loader && data?.length === 0 && (
        <AlertText
          accessibilityLabel={`Mensagem de indisponibilidade: Desculpe, não há dados disponíveis para os ${title} neste momento.`}
        >
          Desculpe, não há dados disponíveis para os {title} neste momento.
        </AlertText>
      )}
      {!loader && (
        <CardCarrosselComponent handleRoute={handleRoute} data={data} />
      )}
    </View>
  );
};
