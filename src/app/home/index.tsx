import { Icons } from "@assets/index";
import { Header, TextHome, Title } from "./styled";
import { Scroll } from "@/shared/components/scroll";
import { HomeComponent } from "@/components/home";
import { SearchComponent } from "@/components/search";

export default function Home() {
  return (
    <Scroll>
      <Header>
        <Icons.MarvelLogo />
        <SearchComponent />
      </Header>
      <TextHome>Bem vindo ao Pontua Marvel</TextHome>
      <Title>Escolha o seu personagem</Title>
      <TextHome>
        O Universo Marvel é o universo compartilhado onde ocorrem as histórias
        na maioria dos títulos de quadrinhos americanos e outras mídias
        publicadas pela Marvel Entertainment.
      </TextHome>
      <HomeComponent />
    </Scroll>
  );
}
