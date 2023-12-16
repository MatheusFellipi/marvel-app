import { FlatList } from "react-native";
import { CardsComponent } from "./cards";
import { PropsCarrosselListComponents } from "@/types/shared/components/carrossel";

export const CardCarrosselComponent = ({
  data,
  handleRoute,
}: Readonly<PropsCarrosselListComponents>) => (
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
