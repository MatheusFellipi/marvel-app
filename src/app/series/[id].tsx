import { controllerComics } from "@/services/comics";
import { GradientComponent } from "@/shared/components/gradient";
import { Scroll } from "@/shared/components/scroll";
import { TextComponent } from "@/shared/components/text";
import { TextDescription, TextTitleProfile } from "./styles";
import { TypeComicsDetails } from "@/types/components/comics";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";
import { controllerSeries } from "@/services/series";
import { TypeStoriesDetails } from "@/types/components/storie";
import { CarrosselComponent } from "@/shared/components/carrossel";
import { TypeCharactersDetails } from "@/types/components/heros";

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);

  const [series, setSeries] = useState<TypeStoriesDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [chars, setChar] = useState<TypeCharactersDetails[]>([]);

  const details = async (id: number) => {
    try {
      const series = await controllerSeries.ById(id);
      setSeries(series[0]);
      const comics = await controllerSeries.ComicsSerie(id);
      setComics(comics);
      const char = await controllerSeries.ComicChar(id);
      setChar(char);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    details(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <GradientComponent back={back} data={series?.thumbnail}>
        <TextTitleProfile>{series?.title}</TextTitleProfile>
        <TextDescription>
          {series?.description ||
            "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
      </GradientComponent>
      <CarrosselComponent
        data={chars}
        title="Personagens"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "comics/[id]",
            params: { id: id },
          });
        }}
      />
      <CarrosselComponent
        data={comics}
        title="Quadrinhos"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "comics/[id]",
            params: { id: id },
          });
        }}
      />
    </Scroll>
  );
}
