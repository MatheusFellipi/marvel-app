import { controllerComics } from "@/services/comics";
import { CarrosselComponent } from "@/shared/components/carrossel";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeGeneralData } from "@/types/general";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

type Props = {
  idComic?: number;
};

export const ComicCreatorsComponent = ({ idComic }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<TypeGeneralData[]>([]);
  const [loader, setLoader] = useState(true);

  const details = (idComic: number) => {
    controllerComics
      .ComicCreator(idComic)
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    details(idComic as any);
  }, [idComic]);

  return (
    <CarrosselComponent
      data={data}
      loader={loader}
      title="Criadores"
      handleRoute={(id) => {
        router.push({
          params: { id: id },
        });
      }}
    />
  );
};
