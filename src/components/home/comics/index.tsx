import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { controllerComics } from "@/services/comics";
import { SkeletonCarrosselComponent } from "@/shared/components/cardCarrossel/skeleton";
import { SubtitleText } from "../styles";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";

export const ComicComponent = () => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const handleRoute = (heroId: number) => {
    router.push({
      pathname: "hero",
      params: { heroId: heroId },
    } as never);
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
