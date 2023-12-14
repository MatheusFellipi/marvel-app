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
};

export type CardsCarrosselComponentsProps = {
  data: TypeCharacters[];
};