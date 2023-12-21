import { TypeAuth, TypeForgot } from "@/types/components/auth";
import sign from "jwt-encode";
import md5 from "md5";

const secret = "f548af1695de2a8b6865d25c8d328220";

type TypeRepository = {
  id: number;
  username: string;
  password: string;
};

const __repository = [
  {
    id: 1,
    username: "matheus@hotmail.com.br",
    password: "098f6bcd4621d373cade4e832627b4f6", // test
  },
  {
    id: 1,
    username: "nick@gmail.com.br",
    password: "098f6bcd4621d373cade4e832627b4f6", // test
  },
];

const __repositoryCode = [
  {
    id: 1,
    user_id: 1,
    code: "123456",
  },
];

const __token = (username: string, id: number) => {
  return sign(
    {
      sub: id,
      name: username,
    },
    secret
  );
};

const checkUser = (username: string, password: string) => {
  const user = __repository.find((x) => x.username === username);
  if (!user) return Promise.reject("Usuário não encontrado");
  if (user && user.password !== md5(password))
    return Promise.reject("Senha ou username incorreta");
  return {
    token: __token(user.username, user.id),
    user: {
      id: user.id,
      username: user.username,
    },
  };
};

export const mockLogin = async ({ password, username }: TypeAuth) =>
  checkUser(username, password);

export const mockForgot = async ({ username }: TypeForgot) => {
  const user = __repository.find((x) => x.username === username);
  if (!user) return Promise.reject("Usuário não encontrado");
  return 123456;
};

export const mockCode = async ({ id, code }: any) => {
  const user = __repository.find((x) => x.id === id);
  if (!user) return Promise.reject("Usuário não encontrado");
  const codeElement = __repositoryCode.find((x) => x.user_id === user.id);
  if (codeElement?.code !== code) return Promise.reject("O código esta invalido");
  return "O código foi aceito";
};
