import { CardsCarrosselComponentsProps } from "@/types/components/heros";
import { FlatList } from "react-native";
import { CardsComponent } from "./cards";

export const CardCarrosselComponent = ({
  data,
  handleRoute,
}: Readonly<CardsCarrosselComponentsProps>) => (
  <FlatList
    data={data}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <CardsComponent handleRoute={handleRoute} data={item} />
    )}
  />
);
