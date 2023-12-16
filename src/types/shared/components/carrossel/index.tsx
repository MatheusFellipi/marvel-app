import { TypeGeneralData } from "@/types/general";

export type PropsCarrosselListComponents = {
  data: TypeGeneralData[];
  handleRoute: (id: number) => void;
};

export type PropsCardsComponents = {
  data: TypeGeneralData;
  handleRoute: (id: number) => void;
};

export type PropsCarrossel = {
  loader?: boolean;
  title?: string;
} & PropsCarrosselListComponents;
