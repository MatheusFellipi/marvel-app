import { CardsCarrosselComponentsProps } from "@/types/components/heros";
import { FlatList } from "react-native";
import { CardsComponent } from "./cards";

export const CardCarrosselComponent = ({
  data,
}: Readonly<CardsCarrosselComponentsProps>) => (
  <FlatList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <CardsComponent data={item} />}
  />
);
