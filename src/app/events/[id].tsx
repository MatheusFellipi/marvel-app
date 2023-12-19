import { BackgroundComponent } from '@/shared/components/background';
import { CarrosselComponent } from '@/shared/components/carrossel';
import { controllerEvents } from '@/services/events';
import { Scroll } from '@/shared/components/scroll';
import { TypeCharactersDetails } from '@/types/components/heros';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeEventsDetails } from '@/types/components/events';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from 'styled-components';
import { TextDescription } from '@/shared/style/font';
import { TypeCreatorDetails } from '@/types/components/creator';


export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);
  const [events, setEvents] = useState<TypeEventsDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [char, setChar] = useState<TypeCharactersDetails[]>([]);
  const [creator, setCreator] = useState<TypeCreatorDetails[]>([]);

  const details = async (id: number) => {
    setLoader(true);
    try {
      const event = await controllerEvents.ById(id);
      setEvents(event[0]);
      const comic = await controllerEvents.Comics(id);
      setComics(comic);
      const chars = await controllerEvents.Chars(id);
      setChar(chars);
      const creator = await controllerEvents.Creators(id);
      setCreator(creator);
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
        img={events?.thumbnail}
        back={router.back}
        loader={loader}
      >
        <BackgroundComponent.Profile labels={events?.title} />
        <BackgroundComponent.Characteristics
          show={["creators", "characters", "comics", "series"]}
          data={events}
        />
        <TextDescription>
          {events?.description || "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
        <BackgroundComponent.Publication end={events?.end} start={events?.start} />
      </BackgroundComponent.Container>
      <CarrosselComponent
        data={char}
        title="Personagens"
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
    </Scroll>
  );
}
