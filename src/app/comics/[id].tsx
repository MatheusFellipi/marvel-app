import { BackgroundComponent } from "@/shared/components/background";
import { CarrosselComponent } from "@/shared/components/carrossel";
import { controllerComics } from "@/services/comics";
import { Scroll } from "@/shared/components/scroll";
import { TextDescription } from "@/shared/style/font";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeComicsDetails } from "@/types/components/comics";
import { TypeCreatorDetails } from "@/types/components/creator";
import { TypeStoriesDetails } from "@/types/components/story";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<TypeComicsDetails>();
  const [creator, setCreator] = useState<TypeCreatorDetails[]>([]);
  const [char, setChar] = useState<TypeCharactersDetails[]>([]);
  const [stories, setStories] = useState<TypeStoriesDetails[]>([]);

  const details = async (id: number) => {
    setLoader(true);
    try {
      const comic = await controllerComics.ById(id);
      setData(comic[0]);
      const creator = await controllerComics.Creators(id);
      setCreator(creator);
      const char = await controllerComics.Chars(id);
      setChar(char);
      const story = await controllerComics.Stories(id);
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
        <BackgroundComponent.Profile labels={data?.title} />
        <BackgroundComponent.Characteristics
          show={["stories", "events", "characters", "creators"]}
          data={data}
        />
        <TextDescription>
          {data?.description ||
            "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
      </BackgroundComponent.Container>
      <CarrosselComponent
        data={stories}
        loader={loader}
        title="Historias"
        handleRoute={(id) =>
          router.push({ pathname: "stories/[id]", params: { id: id } })
        }
      />
      <CarrosselComponent
        data={char}
        title="Personagens"
        loader={loader}
        handleRoute={(id) =>
          router.push({ pathname: "hero/[id]", params: { id: id } })
        }
      />
      <CarrosselComponent
        data={creator}
        loader={loader}
        title="Criadores"
        handleRoute={(id) =>
          router.push({ pathname: "creator/[id]", params: { id: id } })
        }
      />
    </Scroll>
  );
}
