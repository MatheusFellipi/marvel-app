import { CarrosselComponent } from "@/shared/components/carrossel";
import { controllerSeries } from "@/services/series";
import { TypeCharacters } from "@/types/components/heros";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export const SerieComponent = () => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharacters[]>([]);
  const [loader, setLoader] = useState(true);

  const getSeries = () => {
    controllerSeries
      .Get()
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  useEffect(() => {
    getSeries();
  }, []);

  return (
    <CarrosselComponent
      data={data}
      loader={loader}
      handleRoute={(id) => {
        router.push({
          pathname: "series/[id]",
          params: { id: id },
        });
      }}
    />
  );
};
