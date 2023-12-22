import {
  TypeAuth,
  TypeCodeForgot,
  TypeForgot,
  TypeUser,
} from "@/types/components/auth";
import { mockCode, mockForgot, mockLogin } from "./mock";

export const controllerAuth = {
  Login: async (login: TypeAuth): Promise<TypeUser> => {
    const data = await mockLogin(login);
    return data;
  },
  Forgot: async (login: TypeForgot): Promise<number> => {
    const data = await mockForgot(login);
    return data;
  },
  CheckCode: async (login: TypeCodeForgot): Promise<string> => {
    const data = await mockCode(login);
    return data;
  },
};
