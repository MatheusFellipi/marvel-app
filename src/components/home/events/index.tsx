import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SubtitleText } from "../styles";
import { controllerEvents } from "@/services/events";

export default function EventsComponent() {
  const [data, setData] = useState<TypeCharacters[]>([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    controllerEvents.Get().then((data) => {
      setData(data);
    });
  };

  return (
    <View>
      <SubtitleText>Eventos</SubtitleText>
      <CardCarrosselComponent data={data} />
    </View>
  );
}
