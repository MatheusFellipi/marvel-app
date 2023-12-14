import { controllerCharacters } from "@/services/characters";
import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SubtitleText } from "../styles";

export default function HeroComponent() {
  const [data, setData] = useState<TypeCharacters[]>([]);

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    controllerCharacters.Get().then((data) => {
      setData(data);
    });
  };

  return (
    <View>
      <SubtitleText>Heróis</SubtitleText>
      <CardCarrosselComponent data={data} />
    </View>
  );
}
