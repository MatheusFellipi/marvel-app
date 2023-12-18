import { CarrosselComponent } from "@/shared/components/carrossel";
import { controllerCharacters } from "@/services/characters";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export const HeroComponent = () => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const getCharacters = () => {
    controllerCharacters
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <CarrosselComponent
      data={data}
      loader={loader}
      color="red"
      title="Heróis"
      handleRoute={(id) => {
        router.push({
          pathname: "hero/[id]",
          params: { id: id },
        });
      }}
    />
  );
};
