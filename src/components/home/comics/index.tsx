import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { controllerComics } from "@/services/comics";
import { SubtitleText } from "../styles";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SkeletonCarrosselComponent } from "@/shared/components/cardCarrossel/skeleton";

export const ComicComponent = () => {
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getComics();
  }, []);

  const getComics = () => {
    controllerComics
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <View>
      <SubtitleText>Quadrinhos</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && <CardCarrosselComponent data={data} />}
    </View>
  );
};
