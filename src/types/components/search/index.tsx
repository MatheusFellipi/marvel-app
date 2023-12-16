export type TypeFilter = {
  name: string;
  type: string;
  selected: boolean;
};

export type ResultType = {
  id: number;
  name?: string;
  title?: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type CardSearchProps = {
  item: ResultType;
  handleNavigation: (id: number) => void;
};
