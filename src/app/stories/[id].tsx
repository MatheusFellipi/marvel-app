import { BackgroundComponent } from '@/shared/components/background';
import { CarrosselComponent } from '@/shared/components/carrossel';
import { controllerStories } from '@/services/story';
import { Scroll } from '@/shared/components/scroll';
import { TextDescription } from '@/shared/style/font';
import { TypeCharactersDetails } from '@/types/components/heros';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeCreatorDetails } from '@/types/components/creator';
import { TypeStoriesDetails } from '@/types/components/story';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from 'styled-components';

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const [loader, setLoader] = useState(true);
  const [stories, setStories] = useState<TypeStoriesDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [creator, setCreator] = useState<TypeCreatorDetails[]>([]);
  const [char, setChar] = useState<TypeCharactersDetails[]>([]);

  const getDetails = async (id: number) => {
    setLoader(true);
    try {
      const story = await controllerStories.ById(id);
      setStories(story[0]);
      const chars = await controllerStories.Chars(id);
      setChar(chars);
      const creator = await controllerStories.Creators(id);
      setCreator(creator);
      const comic = await controllerStories.Comics(id);
      setComics(comic);
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
      <BackgroundComponent.Container
        img={stories?.thumbnail}
        back={router.back}
        loader={loader}
      >
        <BackgroundComponent.Profile labels={stories?.title} />
        <BackgroundComponent.Characteristics
          show={["comics", "events", "characters", "creators"]}
          data={stories}
        />
        <TextDescription>
          {stories?.description ||
            "Infelizmente, não temos informações adicionais sobre o historia neste momento."}
        </TextDescription>
      </BackgroundComponent.Container>

      <CarrosselComponent
        data={creator}
        title="Criadores"
        loader={loader}
        handleRoute={(id) => {
          router.push({
            pathname: "creator/[id]",
            params: { id: id },
          });
        }}
      />
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
