export type TypeAuth = {
  username: string;
  password: string;
};

export type TypeUser = {
  token: string;
  user: {
    username: string;
    id: number;
  };
};
export type TypeForgot = {
  username: string;
};
