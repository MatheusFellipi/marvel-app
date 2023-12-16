import { CharacteristicsHeroComponent } from "@/components/hero/characteristics";
import { HeroComicsComponent } from "@/components/hero/comics";
import { controllerCharacters } from "@/services/characters";
import { controllerSearch } from "@/services/search";
import { ResultType } from "@/types/components/search";
import { Scroll } from "@/shared/components/scroll";
import { TextComponent } from "@/shared/components/text";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeComicsDetails } from "@/types/components/comics";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";
import { VersionHeroComponent } from "@/components/hero/version";
import { View } from "react-native";
import { TextDescription, TextTitleProfile } from "./styles";
import { GradientComponent } from "@/shared/components/gradient";

export default function HeroScreen() {
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [data, setData] = useState<TypeCharactersDetails>();
  const [allVersion, setAllVersion] = useState<ResultType[]>([]);
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [loaderComics, setLoaderComics] = useState(true);

  const details = (id: number) => {
    controllerCharacters.ById(id).then((data) => {
      setData(data[0]);
      allSearchVersion(data[0].name.split("(")[0]);
    });
  };

  const comicsById = (id: number) => {
    controllerCharacters
      .CharComics(id)
      .then((data) => {
        setComics(data);
      })
      .finally(() => {
        setLoaderComics(false);
      });
  };

  const allSearchVersion = (name: string) => {
    controllerSearch
      .Get(`characters?limit=5&nameStartsWith=${name}`)
      .then((data) => {
        setAllVersion(data);
      });
  };

  useEffect(() => {
    details(id as any);
    comicsById(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <GradientComponent back={back} data={data?.thumbnail}>
        <TextComponent
          TextColor={theme.colors.white}
          fontSize={16}
          fontFamily="Poppins_500Medium"
        >
          {data?.name.split("(")[1] &&
            data?.name.split("(")[1].replaceAll(")", "")}
        </TextComponent>
        <TextTitleProfile>{data?.name.split("(")[0]}</TextTitleProfile>
        <CharacteristicsHeroComponent data={data} />
        <TextDescription>
          {data?.description.length !== 0
            ? data?.description
            : "Infelizmente, não temos informações adicionais sobre o herói neste momento."}
        </TextDescription>
      </GradientComponent>
      <View style={{ marginTop: 45 }}>
        <VersionHeroComponent current={data} data={allVersion} />
        <HeroComicsComponent comics={comics} loader={loaderComics} />
      </View>
    </Scroll>
  );
}
