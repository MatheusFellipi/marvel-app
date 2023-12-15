import { ComicComponent } from "./comics";
import { EventsComponent } from "./events";
import { HeroComponent } from "./heros";
import { SerieComponent } from "./series";
import { Container } from "./styles";

export const HomeComponent = () => (
  <Container>
    <HeroComponent />
    <ComicComponent />
    <SerieComponent />
    <EventsComponent />
  </Container>
);
