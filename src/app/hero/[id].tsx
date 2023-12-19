import { CarrosselComponent } from '@/shared/components/carrossel';
import { CharacteristicsComponent } from '@/shared/components/characteristics';
import { controllerCharacters } from '@/services/characters';
import { controllerSearch } from '@/services/search';
import { GradientComponent } from '@/shared/components/gradient';
import { ResultType } from '@/types/components/search';
import { Scroll } from '@/shared/components/scroll';
import { TextComponent } from '@/shared/components/text';
import { TextDescription, TextTitleProfile } from './styles';
import { TypeCharactersDetails } from '@/types/components/heros';
import { TypeComicsDetails } from '@/types/components/comics';
import { TypeEventsDetails } from '@/types/components/events';
import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTheme } from 'styled-components';
import { VersionHeroComponent } from '@/shared/components/version';
import { View } from 'react-native';
import { TimelineComponent } from '@/shared/components/timeline';

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
    try {
      const char = await controllerCharacters.ById(id);
      setData(char[0]);
      const comis = await controllerCharacters.CharComics(id);
      setComics(comis);
      const event = await controllerCharacters.CharEvents(id);
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
      <GradientComponent back={router.back} data={data?.thumbnail}>
        <TextComponent
          TextColor={theme.colors.white}
          fontSize={16}
          fontFamily="Poppins_500Medium"
        >
          {data?.name.split("(")[1] &&
            data?.name.split("(")[1].replaceAll(")", "")}
        </TextComponent>
        <TextTitleProfile>{data?.name.split("(")[0]}</TextTitleProfile>
        <CharacteristicsComponent
          show={["stories", "events", "series", "comics"]}
          data={data}
        />
        <TextDescription>
          {data?.description.length !== 0
            ? data?.description
            : "Infelizmente, não temos informações adicionais sobre o herói neste momento."}
        </TextDescription>
      </GradientComponent>
      <View style={{ marginTop: 45 }}>
        <TimelineComponent data={events} />
        <VersionHeroComponent current={data} data={allVersion} />
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
