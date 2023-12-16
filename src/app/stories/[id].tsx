import { CharacteristicsComicsComponent } from "@/components/comics/characteristics";
import { controllerComics } from "@/services/comics";
import { GradientComponent } from "@/shared/components/gradient";
import { Scroll } from "@/shared/components/scroll";
import { TextComponent } from "@/shared/components/text";
import { TextDescription, TextTitleProfile } from "./styles";
import { TypeComicsDetails } from "@/types/components/comics";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";
import { ComicCreatorsComponent } from "@/components/comics/creator";
import { ComicStoriesComponent } from "@/components/comics/storie";
import { ComicHerosComponent } from "@/components/comics/heros";

export default function HeroScreen() {
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [data, setData] = useState<TypeComicsDetails>();

  const details = (id: number) => {
    controllerComics.ById(id).then((data) => {
      setData(data[0]);
    });
  };

  useEffect(() => {
    details(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <GradientComponent back={back} data={data?.thumbnail}>
        <TextComponent
          TextColor={theme.colors.white}
          fontSize={16}
          fontFamily="Poppins_500Medium"
        >
          
        </TextComponent>
        <TextTitleProfile> {data?.title}</TextTitleProfile>
        <CharacteristicsComicsComponent data={data} />
        <TextDescription>
          {data?.description.length !== 0
            ? data?.description
            : "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
      </GradientComponent>
      <ComicStoriesComponent idComic={id as any} />
      <ComicCreatorsComponent idComic={id as any} />
      <ComicHerosComponent idComic={id as any} />
    </Scroll>
  );
}
