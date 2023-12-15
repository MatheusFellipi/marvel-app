import { ComicComponent } from "@/components/home/comics";
import { EventsComponent } from "@/components/home/events";
import { HeroComponent } from "@/components/home/heros";
import { SerieComponent } from "@/components/home/series";
import { Icons } from "@assets/index";
import { Header, SearchIcon, TextHome, Title } from "./styled";
import { Scroll } from "@/shared/components/scroll";

export default function Home() {
  return (
    <Scroll>
      <Header>
        <Icons.MarvelLogo />
        <SearchIcon>
          <Icons.Nav.Search />
        </SearchIcon>
      </Header>
      <TextHome>Bem vindo ao Pontua Marvel</TextHome>
      <Title>Escolha o seu personagem</Title>
      <TextHome>
        O Universo Marvel é o universo compartilhado onde ocorrem as histórias
        na maioria dos títulos de quadrinhos americanos e outras mídias
        publicadas pela Marvel Entertainment.
      </TextHome>
      <HeroComponent></HeroComponent>
      <ComicComponent></ComicComponent>
      <SerieComponent></SerieComponent>
      <EventsComponent></EventsComponent>
    </Scroll>
  );
}
