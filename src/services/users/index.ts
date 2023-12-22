import {
  TypeCodeForgot,
  TypeForgot,
  TypePassword,
  TypeUserCreate,
} from "@/types/components/auth";
import { repository } from "./function";

export const controllerUser = {
  changePassword: async (login: TypePassword) => {
    const data = await repository.changePassword(login);
    return data;
  },
  CheckCode: async (login: TypeCodeForgot) => {
   const data = await repository.CheckCode(login);
   return data
  },
  Forgot: async (login: TypeForgot) => {
    await repository.Forgot(login);
  },
  createUser: async (user: TypeUserCreate) => {
    const data = await repository.AddUser(user);
    return data;
  },
};
