import { CardsCarrossel, TextTitleCard, styles } from "./styles";
import { CardsComponentsProps } from "@/types/components/heros";
import { Image } from "expo-image";

export default function CardsComponent({
  data,
}: Readonly<CardsComponentsProps>) {
  const url = `${data.thumbnail.path}.${data.thumbnail.extension}`;
  return (
    <CardsCarrossel>
      <Image style={styles.image} source={url} transition={1000} />
      <TextTitleCard>{data.name}</TextTitleCard>
    </CardsCarrossel>
  );
}
