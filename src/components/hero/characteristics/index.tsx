import { CharacteristicContentComponent } from "@/shared/components/characteristics";
import { Characteristics } from "../styled";
import { TypeCharactersDetails } from "@/types/components/heros";

type Props = {
  data?: TypeCharactersDetails;
};

export const CharacteristicsHeroComponent = ({ data }: Props) => (
  <Characteristics>
    <CharacteristicContentComponent title="Histórias" count={data?.stories?.available} />
    <CharacteristicContentComponent title="Eventos" count={data?.events?.available} />
    <CharacteristicContentComponent title="Séries" count={data?.series?.available} />
    <CharacteristicContentComponent title="Quadrinhos" count={data?.comics?.available} />
  </Characteristics>
);

