import { CarrosselComponent } from "@/shared/components/carrossel";
import { controllerEvents } from "@/services/events";
import { format } from "date-fns";
import { GradientComponent } from "@/shared/components/gradient";
import { ptBR } from "date-fns/locale";
import { Scroll } from "@/shared/components/scroll";
import { TextComponent } from "@/shared/components/text";
import { TextTitleProfile } from "./styles";
import { TypeCharactersDetails } from "@/types/components/heros";
import { TypeComicsDetails } from "@/types/components/comics";
import { TypeEventsDetails } from "@/types/components/events";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useTheme } from "styled-components";
import { SubtitleText, TextDescription } from "@/shared/style/font";
import { CharacteristicsComponent } from "@/shared/components/characteristics";

export default function HeroScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { back } = useRouter();
  const { id } = useLocalSearchParams();

  const [loader, setLoader] = useState(true);
  const [events, setEvents] = useState<TypeEventsDetails>();
  const [comics, setComics] = useState<TypeComicsDetails[]>([]);
  const [char, setChar] = useState<TypeCharactersDetails[]>([]);
  const [creator, setCreator] = useState<TypeCharactersDetails[]>([]);

  const details = async (id: number) => {
    try {
      const event = await controllerEvents.ById(id);
      setEvents(event[0]);
      const comic = await controllerEvents.ComicComics(id);
      setComics(comic);
      const chars = await controllerEvents.ComicChar(id);
      setChar(chars);
      const creator = await controllerEvents.ComicCreator(id);
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
      <GradientComponent back={back} data={events?.thumbnail}>
        <TextComponent
          TextColor={theme.colors.white}
          fontSize={16}
          fontFamily="Poppins_500Medium"
        ></TextComponent>
        <TextTitleProfile> {events?.title}</TextTitleProfile>
        <CharacteristicsComponent
          data={events}
          show={["creators", "characters", "comics", "series"]}
        />
        <TextDescription>
          {events?.description.length !== 0
            ? events?.description
            : "Infelizmente, não temos informações adicionais sobre o quadrinhos neste momento."}
        </TextDescription>
        <SubtitleText color={"white"}>Publicação</SubtitleText>
        <TextDescription>
          O primeiro ano de publicação da série foi{" "}
          {format(events?.start ?? "0000-01", "yyyy MMMM", { locale: ptBR })} e
          o último ano de publicação da série foi{" "}
          {format(events?.end ?? "0000-01", "yyyy MMMM", { locale: ptBR })}.
        </TextDescription>
      </GradientComponent>
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
