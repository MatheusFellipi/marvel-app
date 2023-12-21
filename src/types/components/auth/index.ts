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
  username: string;
};

export type TypePassword = {
  password: string;
  rePassword: string;
};


export type TypeCodeForgot = {
  username: string;
  code: string;
};


export type TypeUserCreate = {
  fullName:string;
  email:string;
  password:string;
  confirmPassword:string;
};
