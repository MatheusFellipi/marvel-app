import { CarrosselComponent } from "@/shared/components/carrossel";
import { CharacteristicsComponent } from "@/shared/components/characteristics";
import { controllerComics } from "@/services/comics";
import { GradientComponent } from "@/shared/components/gradient";
import { Scroll } from "@/shared/components/scroll";
import { TextComponent } from "@/shared/components/text";
import { TextDescription, TextTitleProfile } from "./styles";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeComicsDetails } from "@/types/components/comics";
import { TypeCreatorDetails } from "@/types/components/creator";
import { TypeStoriesDetails } from "@/types/components/storie";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";
import { controllerCreator } from "@/services/creator";

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);

  const [data, setData] = useState<TypeCreatorDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [event, setEvents] = useState<TypeCharactersDetails[]>([]);
  const [stories, setStories] = useState<TypeStoriesDetails[]>([]);

  const details = async (id: number) => {
    try {
      const creator = await controllerCreator.ById(id);
      setData(creator[0]);
      const comic = await controllerCreator.Comics(id);
      setComics(comic);
      const event = await controllerCreator.Events(id);
      setEvents(event);
      const story = await controllerCreator.Stories(id);
      setStories(story);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    details(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <GradientComponent back={back} data={data?.thumbnail}>
        <TextTitleProfile> {data?.fullName}</TextTitleProfile>
        <CharacteristicsComponent
          show={["stories", "events", "series"]}
          data={data}
        />
      </GradientComponent>

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
      <CarrosselComponent
        data={event}
        title="eventos"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "events/[id]",
            params: { id: id },
          });
        }}
      />
      <CarrosselComponent
        data={stories}
        title="Historias"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "events/[id]",
            params: { id: id },
          });
        }}
      />
    </Scroll>
  );
}
