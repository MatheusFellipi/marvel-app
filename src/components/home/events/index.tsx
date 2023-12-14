import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SubtitleText } from "../styles";
import { controllerEvents } from "@/services/events";
import { SkeletonCarrosselComponent } from "@/shared/components/cardCarrossel/skeleton";
import { useNavigation } from "expo-router";

export const EventsComponent = () => {
  const { navigate } = useNavigation();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const handleRoute = (id: number) => {
    navigate(`hero/${id}` as never);
  };

  const getEvents = () => {
    controllerEvents
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <View>
      <SubtitleText>Eventos</SubtitleText>
      {loader && <SkeletonCarrosselComponent />}
      {!loader && <CardCarrosselComponent handleRoute={handleRoute} data={data} />}
    </View>
  );
};
