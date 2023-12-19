import { CarrosselComponent } from '@/shared/components/carrossel';
import { CharacteristicsComponent } from '@/shared/components/characteristics';
import { controllerComics } from '@/services/comics';
import { GradientComponent } from '@/shared/components/gradient';
import { Scroll } from '@/shared/components/scroll';
import { TextComponent } from '@/shared/components/text';
import { TextDescription, TextTitleProfile } from './styles';
import { TypeCharactersDetails } from '@/types/components/heros';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeCreatorDetails } from '@/types/components/creator';
import { TypeStoriesDetails } from '@/types/components/storie';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from 'styled-components';

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<TypeComicsDetails>();
  const [creator, setCreator] = useState<TypeCreatorDetails[]>([]);
  const [char, setChar] = useState<TypeCharactersDetails[]>([]);
  const [stories, setStories] = useState<TypeStoriesDetails[]>([]);

  const details = async (id: number) => {
    setLoader(true)
    try {
      const comic = await controllerComics.ById(id);
      setData(comic[0]);
      const creator = await controllerComics.ComicCreator(id);
      setCreator(creator);
      const char = await controllerComics.ComicChar(id);
      setChar(char);
      const story = await controllerComics.ComicStories(id);
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
        <TextComponent
          TextColor={theme.colors.white}
          fontSize={16}
          fontFamily="Poppins_500Medium"
        ></TextComponent>
        <TextTitleProfile> {data?.title}</TextTitleProfile>
        <CharacteristicsComponent
          show={["stories", "events", "characters", "creators"]}
          data={data}
        />
        <TextDescription>
          {data?.description || "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
      </GradientComponent>
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
      <CarrosselComponent data={creator} loader={loader} title="Criadores" />
    </Scroll>
  );
}
