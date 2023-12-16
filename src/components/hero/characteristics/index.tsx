import { Characteristics } from "../styled";
import { CardCharacComponent } from "./card";
import { TypeCharactersDetails } from "@/types/components/heros";

type Props = {
  data?: TypeCharactersDetails;
};

export const CharacteristicsHeroComponent = ({ data }: Props) => (
  <Characteristics>
    <CardCharacComponent title="Histórias" count={data?.stories?.available} />
    <CardCharacComponent title="Eventos" count={data?.events?.available} />
    <CardCharacComponent title="Séries" count={data?.series?.available} />
    <CardCharacComponent title="Quadrinhos" count={data?.comics?.available} />
  </Characteristics>
);
