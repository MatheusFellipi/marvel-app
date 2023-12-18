import { CarrosselComponent } from "@/shared/components/carrossel";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { controllerEvents } from "@/services/events";
import { useRouter } from "expo-router";

export const EventsComponent = () => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

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
    <CarrosselComponent
      data={data}
      loader={loader}
      color="red"
      title="Eventos"
      handleRoute={(id) => {
        router.push({
          pathname: "events/[id]",
          params: { id: id },
        });
      }}
    />
  );
};
