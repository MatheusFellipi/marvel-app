import { CharacteristicContentComponent } from "./CardContent";
import { Characteristics } from "./styled";
import { TypeComicsDetails } from "@/types/components/comics";

type Key =
  | "stories"
  | "events"
  | "characters"
  | "creators"
  | "series"
  | "comics";

type Props = {
  data?: any;
  show?: Key[];
};

const title = (item: string) => {
  if (item === "stories") return "Historias";
  else if (item === "events") return "Eventos";
  else if (item === "characters") return "Personagens";
  else if (item === "creators") return "Criadores";
  else if (item === "series") return "Séries";
  else if (item === "comics") return "Quadrinhos";
};

export const CharacteristicsComponent = ({ data, show = [] }: Props) => (
  <Characteristics>
    {data &&
      show.map((item) => (
        <CharacteristicContentComponent
          key={item}
          title={title(item)}
          count={data[item]?.available}
        />
      ))}
  </Characteristics>
);
