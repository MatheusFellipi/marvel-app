import { TypeAuth, TypeCodeForgot, TypeForgot, TypeUserCreate } from "@/types/components/auth";
import sign from "jwt-encode";
import md5 from "md5";

const secret = "f548af1695de2a8b6865d25c8d328220";


const __repository = [
  {
    fullName: "matheus fellipi",
    username: "matheus@hotmail.com.br",
    password: "098f6bcd4621d373cade4e832627b4f6", // test
  },
  {
    fullName: "nink test",
    username: "nick@gmail.com.br",
    password: "098f6bcd4621d373cade4e832627b4f6", // test
  },
];

const __repositoryCode = [
  {
    user_id: "matheus@hotmail.com.br",
    code: "123456",
  },
];

const __token = (username: string) => {
  return sign(
    {
      sub: username,
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
    token: __token(user.username),
    user: {
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

export const mockCode = async ({ username, code }: TypeCodeForgot) => {
  const user = __repository.find((x) => x.username === username);
  if (!user) return Promise.reject("Usuário não encontrado");
  const codeElement = __repositoryCode.find((x) => x.user_id === user.username);
  if (codeElement?.code !== code)
    return Promise.reject("O código esta invalido");
  return "O código foi aceito";
};

export const mockCreate = async ({
  confirmPassword,
  fullName,
  password,
  email,
}: TypeUserCreate) => {
  const user = __repository.find((x) => x.username === email);
  if (user) return Promise.reject("Usuário ja exite");
  if (confirmPassword !== password)
    return Promise.reject("as senha nao sao iquais");
  const data = {
    fullName,
    password,
    username: email,
  };
  __repository.push(data);
};
