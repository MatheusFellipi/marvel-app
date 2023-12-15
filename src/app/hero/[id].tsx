import { controllerCharacters } from "@/services/characters";
import { Icons } from "@assets/index";
import { Scroll } from "@/shared/components/scroll";
import {
  Characteristics,
  Gradient,
  HandleBack,
  TextCharacteristicsDescription,
  TextCharacteristicsTitle,
  TextDescription,
  TextSectionTitle,
  TextTitleProfile,
} from "./styles";
import { Dimensions, ImageBackground, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { CardCarrosselComponent } from "@/shared/components/cardCarrossel";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeComicsDetails } from "@/types/components/comics";

const { height } = Dimensions.get("screen");

export default function HeroScreen() {
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [data, setData] = useState<TypeCharactersDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);

  const details = (id: number) => {
    controllerCharacters.ById(id).then((data) => {
      setData(data[0]);
    });
  };

  const comicsById = (id: number) => {
    controllerCharacters.CharComics(id).then((data) => {
      setComics(data);
    });
  };

  useEffect(() => {
    details(id as any);
    comicsById(id as any);
  }, [id]);

  return (
    <Scroll bgColor={theme.colors.black}>
      <ImageBackground
        source={{
          uri: `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`,
        }}
      >
        <HandleBack onPress={() => back()}>
          <Icons.Nav.Back fill={"#fff"} stroke={"#fff"} />
        </HandleBack>
        <Gradient
          colors={[
            "transparent",
            "transparent",
            "#00000089",
            "#000000ac",
            "#000000cc",
            "#000000df",
            "#000000",
            "#000000",
          ]}
        >
          <TextTitleProfile>{data?.name}</TextTitleProfile>
          <Characteristics>
            <View>
              <TextCharacteristicsTitle>
                {data?.stories?.available}
              </TextCharacteristicsTitle>
              <TextCharacteristicsDescription>
                Histórias
              </TextCharacteristicsDescription>
            </View>
            <View>
              <TextCharacteristicsTitle>
                {data?.events?.available}
              </TextCharacteristicsTitle>
              <TextCharacteristicsDescription>
                Eventos
              </TextCharacteristicsDescription>
            </View>
            <View>
              <TextCharacteristicsTitle>
                {data?.series?.available}
              </TextCharacteristicsTitle>
              <TextCharacteristicsDescription>
                Séries
              </TextCharacteristicsDescription>
            </View>
            <View>
              <TextCharacteristicsTitle>
                {data?.comics?.available}
              </TextCharacteristicsTitle>
              <TextCharacteristicsDescription>
                Quadrinhos
              </TextCharacteristicsDescription>
            </View>
          </Characteristics>
          <TextDescription>
            {data?.description.length !== 0
              ? data?.description
              : "o herói nao possui descrição "}
          </TextDescription>
        </Gradient>
      </ImageBackground>
      <TextSectionTitle>Quadrinhos</TextSectionTitle>
      <CardCarrosselComponent data={comics} handleRoute={() => {}} />
    </Scroll>
  );
}
