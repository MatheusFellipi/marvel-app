import { TypeAuth } from "@/types/components/auth";
import sign from "jwt-encode";
import md5 from "md5";

const secret = "f548af1695de2a8b6865d25c8d328220";

const repository = [
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

const token = (username: string, id: number) => {
  return sign(
    {
      sub: id,
      name: username,
    },
    secret
  );
};

const checkUser = (username: string, password: string) => {
  const user = repository.find((x) => x.username === username);

  if (!user) {
    return Promise.reject("Usuário não encontrado");
  }

  if (user.password !== md5(password)) {
    return Promise.reject("Senha ou username incorreta");
  }

  return {
    token: token(user.username, user.id),
    user: {
      id: user.id,
      username: user.username,
    },
  };
};

export const mockLogin = async ({ password, username }: TypeAuth) =>
  checkUser(username, password);
