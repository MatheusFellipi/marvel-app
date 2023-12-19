export type TypeSeriesDetails = {
  id: number;
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  rating: string;
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
  characters: {
    available: number;
  };
  creators: {
    available: number;
  };
};
