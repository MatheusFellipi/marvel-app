import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SubtitleText } from "../styles";
import { controllerEvents } from "@/services/events";
import { SkeletonCarrosselComponent } from "@/shared/components/cardCarrossel/skeleton";

export const EventsComponent = ()=> {
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    controllerEvents.Get().then((data) => {
      setData(data);
    }).finally(()=>{
      setLoader(false)
    });
  };

  return (
    <View>
      <SubtitleText>Eventos</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && <CardCarrosselComponent data={data} />}
    </View>
  );
}
