import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { controllerCharacters } from "@/services/characters";
import { SkeletonCarrosselComponent } from "@/shared/components/cardCarrossel/skeleton";
import { SubtitleText } from "../styles";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "expo-router";

export const HeroComponent = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const handleRoute = (id: number) => {
    navigate(`hero/${id}` as never);
  };

  const getCharacters = () => {
    controllerCharacters
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(true);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View>
      <SubtitleText>Heróis</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && <CardCarrosselComponent handleRoute={handleRoute} data={data} />}
    </View>
  );
};
