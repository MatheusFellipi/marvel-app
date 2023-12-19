import { BackgroundComponent } from "@/shared/components/background";
import { CarrosselComponent } from "@/shared/components/carrossel";
import { controllerCreator } from "@/services/creator";
import { Scroll } from "@/shared/components/scroll";
import { TypeComicsDetails } from "@/types/components/comics";
import { TypeCreatorDetails } from "@/types/components/creator";
import { TypeEventsDetails } from "@/types/components/events";
import { TypeStoriesDetails } from "@/types/components/story";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);

  const [data, setData] = useState<TypeCreatorDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [event, setEvent] = useState<TypeEventsDetails[]>([]);
  const [stories, setStories] = useState<TypeStoriesDetails[]>([]);

  const details = async (id: number) => {
    setLoader(true);
    try {
      const creator = await controllerCreator.ById(id);
      setData(creator[0]);
      const comic = await controllerCreator.Comics(id);
      setComics(comic);
      const event = await controllerCreator.Events(id);
      setEvent(event);
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
      <BackgroundComponent.Container
        img={data?.thumbnail}
        back={router.back}
        loader={loader}
      >
        <BackgroundComponent.Profile
          labels={`${data?.fullName} ${data?.suffix}`}
        />
        <BackgroundComponent.Characteristics
          show={["stories", "events", "series"]}
          data={data}
        />
      </BackgroundComponent.Container>
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
        title="Eventos"
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
