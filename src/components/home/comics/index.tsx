import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { controllerComics } from "@/services/comics";
import { SkeletonCarrosselComponent } from "@/shared/components/cardCarrossel/skeleton";
import { SubtitleText } from "../styles";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { View } from "react-native";

export const ComicComponent = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const handleRoute = (id: number) => {
    navigate(`hero/${id}` as never);
  };

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

  useEffect(() => {
    getComics();
  }, []);

  return (
    <View>
      <SubtitleText>Quadrinhos</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && (
        <CardCarrosselComponent handleRoute={handleRoute} data={data} />
      )}
    </View>
  );
};
