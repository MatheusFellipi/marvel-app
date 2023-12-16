import { controllerComics } from "@/services/comics";
import { CarrosselComponent } from "@/shared/components/carrossel";
import { TypeCharactersDetails } from "@/types/components/heros";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

type Props = {
  idComic?: number;
};

export const ComicHerosComponent = ({ idComic }: Props) => {
  const router = useRouter();
  const [data, setData] = useState<TypeCharactersDetails[]>([]);
  const [loader, setLoader] = useState(true);

  const details = (idComic: number) => {
    controllerComics
      .ComicChar(idComic)
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
      title="Personagens"
      loader={loader}
      handleRoute={(id) => {
        router.push({
          pathname: "hero/[id]",
          params: { id: id },
        });
      }}
    />
  );
};
