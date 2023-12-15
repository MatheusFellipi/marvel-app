import { CardsCarrossel, TextTitleCard, styles } from "./styles";
import { CardsComponentsProps } from "@/types/components/heros";
import { Image } from "expo-image";

export const CardsComponent = ({
  data,
  handleRoute,
}: Readonly<CardsComponentsProps>) => {
  const url = `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`;

  const title = () => {
    let title = data?.name ?? data?.title ?? "";
    if (title.length > 30) {
      title = title.slice(0, 15) + "...";
    }
    return title;
  };

  return (
    <CardsCarrossel onPress={() => handleRoute(data.id)}>
      <Image style={styles.image} source={url} transition={1000} />
      <TextTitleCard>{title()}</TextTitleCard>
    </CardsCarrossel>
  );
};
