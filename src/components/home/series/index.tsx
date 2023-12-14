import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SubtitleText } from "../styles";
import { controllerSeries } from "@/services/series";

export const SerieComponent = () => {
  const [data, setData] = useState<TypeCharacters[]>([]);

  useEffect(() => {
    getSeries();
  }, []);

  const getSeries = () => {
    controllerSeries.Get().then((data) => {
      setData(data);
    });
  };

  return (
    <View>
      <SubtitleText>Séries</SubtitleText>
      <CardCarrosselComponent data={data} />
    </View>
  );
};
