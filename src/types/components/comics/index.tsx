export type TypeComicsDetails = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  dates: [
    {
      type: string;
      date: Date;
    }
  ];
  prices: [
    {
      type: string;
      price: "float";
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    available: number;
  };
  characters: {
    available: number;
  };
  stories: {
    available: number;
  };
  events: {
    available: number;
  };
};
