export type TypeEventsDetails = {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  modified: Date;
  start: Date;
  end: Date;
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
  series: {
    available: number;
  };
  characters: {
    available: number;
  };
  creators: {
    available: number;
  };
  next: {
    resourceURI: string;
    name: string;
  };
};
