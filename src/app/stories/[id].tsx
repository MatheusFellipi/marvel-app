import { CharacteristicsComponent } from "@/shared/components/characteristics";
import { controllerStories } from "@/services/storie";
import { GradientComponent } from "@/shared/components/gradient";
import { Scroll } from "@/shared/components/scroll";
import { TextDescription, TextTitleProfile } from "./styles";
import { TypeStoriesDetails } from "@/types/components/storie";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeCreatorDetails } from "@/types/components/creator";
import { CarrosselComponent } from "@/shared/components/carrossel";

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);

  const [stories, setStories] = useState<TypeStoriesDetails>();
  const [comics, setComics] = useState<TypeStoriesDetails[]>([]);
  const [creator, setCreator] = useState<TypeCreatorDetails[]>([]);
  const [char, setChar] = useState<TypeCharactersDetails[]>([]);

  const getDetails = async (id: number) => {
    try {
      const story = await controllerStories.ById(id);
      setStories(story[0]);
      const chars = await controllerStories.ComicChar(id);
      setChar(chars);
      const creator = await controllerStories.ComicCreator(id);
      setCreator(creator);
      const comis = await controllerStories.ComicsById(id);
      setComics(comis);
      console.log(story[0]);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getDetails(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <GradientComponent back={back} data={stories?.thumbnail}>
        <TextTitleProfile> {stories?.title}</TextTitleProfile>
        <CharacteristicsComponent
          show={["comics", "events", "characters", "creators"]}
          data={stories}
        />
        <TextDescription>
          {stories?.description.length !== 0
            ? stories?.description
            : "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
      </GradientComponent>
      <CarrosselComponent data={creator} title="Criadores" loader={loader} />
      <CarrosselComponent
        data={char}
        title="Personages"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "hero/[id]",
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
