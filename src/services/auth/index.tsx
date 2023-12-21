import { TypeAuth, TypeForgot, TypeUser } from "@/types/components/auth";
import { mockLogin } from "./mock";

export const controllerAuth = {
  Login: async (login: TypeAuth): Promise<TypeUser> => {
    const data = await mockLogin(login);
    return data;
  },
  forgot: async (login: TypeForgot): Promise<TypeUser> => {
    const data = await mockLogin(login);
    return data;
  },
};
