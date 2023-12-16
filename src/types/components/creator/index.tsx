export type TypeCreatorDetails = {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  resourceURI: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};
