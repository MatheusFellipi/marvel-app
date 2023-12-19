export type TypeStoriesDetails = {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
  series: {
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
