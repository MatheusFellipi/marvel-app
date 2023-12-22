export type TypeAuth = {
  username: string;
  password: string;
};

export type TypeUser = {
  token: string;
  user: {
    username: string;
  };
};

export type TypeForgot = {
  email: string;
};

export type TypePassword = {
  email: string;
  password: string;
  rePassword: string;
};

export type TypeCodeForgot = {
  user_id: string;
  code: string;
};

export type TypeUserCreate = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
