export type PropsCarrosselListComponents = {
  data: TypeGeneralData[];
  handleRoute?: (id: number) => void;
};

export type PropsCardsComponents = {
  data: TypeGeneralData;
  handleRoute?: (id: number) => void;
};

export type PropsCarrossel = {
  loader?: boolean;
  color?: "red" | "white";
  title?: string;
} & PropsCarrosselListComponents;
