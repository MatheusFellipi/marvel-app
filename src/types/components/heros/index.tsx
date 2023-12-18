export type TypeCharacters = {
  id: number;
  name?: string;
  title?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type TypeCharactersDetails = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  stories: {
    available: number;
  };
  events: {
    available: number;
  };
  series: {
    available: number;
  };
};
