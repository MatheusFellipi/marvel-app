import styled from "styled-components/native";
import { ComicComponent } from "@/components/home/comics";
import { EventsComponent } from "@/components/home/events";
import { HeroComponent } from "@/components/home/heros";
import { SerieComponent } from "@/components/home/series";
import { Icons } from "@assets/index";

export default function Home() {
  return (
    <>
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
    </>
  );
}

const TextHome = styled.Text`
  color: ${(props) => props.theme.colors.grey};
  font-family: "Poppins_500Medium";
  font-size: 14px;
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.dark};
  font-family: "Poppins_600SemiBold";
  font-size: 32px;
`;

const Header = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

const SearchIcon = styled.TouchableOpacity`
  justify-content: center;
  position: absolute;
  height: 64px;
  width: 50px;
  right: 0;
`;
