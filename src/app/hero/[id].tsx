import { BackgroundComponent } from '@/shared/components/background';
import { CarrosselComponent } from '@/shared/components/carrossel';
import { controllerCharacters } from '@/services/characters';
import { controllerSearch } from '@/services/search';
import { ResultType } from '@/types/components/search';
import { Scroll } from '@/shared/components/scroll';
import { TextDescription } from '@/shared/style/font';
import { TimelineComponent } from '@/shared/components/timeline';
import { TypeCharactersDetails } from '@/types/components/heros';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeEventsDetails } from '@/types/components/events';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from 'styled-components';
import { VersionHeroComponent } from '@/shared/components/version';
import { View } from 'react-native';

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { id } = useLocalSearchParams();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState<TypeCharactersDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [events, setEvents] = useState<TypeEventsDetails[]>([]);
  const [allVersion, setAllVersion] = useState<ResultType[]>([]);

  const getDetails = async (id: number) => {
    setLoader(true);
    try {
      const char = await controllerCharacters.ById(id);
      setData(char[0]);
      const comis = await controllerCharacters.Comics(id);
      setComics(comis);
      const event = await controllerCharacters.Events(id);
      setEvents(event);
      const name = char[0].name.split("(")[0];
      const search = await controllerSearch.Get(
        `characters?limit=5&nameStartsWith=${name}`
      );
      setAllVersion(search);
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
        img={data?.thumbnail}
        back={router.back}
        loader={loader}
      >
        <BackgroundComponent.Profile labels={data?.name} />
        <BackgroundComponent.Characteristics show={["stories", "events", "series", "comics"]} data={data} />
        <TextDescription>
          {data?.description || "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
      </BackgroundComponent.Container>
      <View style={{ marginTop: 45 }}>
        <TimelineComponent data={events} loader={loader} />
        <VersionHeroComponent current={data} data={allVersion} loader={loader} />
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
      </View>
    </Scroll>
  );
}
