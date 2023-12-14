export type TypeCharacters = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type CardsComponentsProps = {
  data: TypeCharacters;
  handleRoute: (id: number) => void;
};

export type CardsCarrosselComponentsProps = {
  data: TypeCharacters[];
  handleRoute: (id: number) => void;
};