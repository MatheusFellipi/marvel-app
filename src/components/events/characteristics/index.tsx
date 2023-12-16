import { TypeComicsDetails } from "@/types/components/comics";
import { Characteristics } from "../styled";
import { CharacteristicContentComponent } from "@/shared/components/characteristics";

type Props = {
  data?: TypeComicsDetails;
};

export const CharacteristicsComicsComponent = ({ data }: Props) => (
  <Characteristics>
    <CharacteristicContentComponent title="Histórias" count={data?.stories?.available} />
    <CharacteristicContentComponent title="Eventos" count={data?.events?.available} />
    <CharacteristicContentComponent title="Heróis" count={data?.characters?.available} />
    <CharacteristicContentComponent title="Criadores" count={data?.creators?.available} />
  </Characteristics>
);
