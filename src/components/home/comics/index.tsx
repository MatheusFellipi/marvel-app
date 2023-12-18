import { CarrosselComponent } from "@/shared/components/carrossel";
import { controllerComics } from "@/services/comics";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export const ComicComponent = () => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

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
    <CarrosselComponent
      data={data}
      loader={loader}
      color="red"
      title="Quadrinhos"
      handleRoute={(id) => {
        router.push({
          pathname: "comics/[id]",
          params: { id: id },
        });
      }}
    />
  );
};
