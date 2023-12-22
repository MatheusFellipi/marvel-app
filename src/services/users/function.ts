import { TypeFireStore, fireStore } from "../firebase/user";
import { TypePassword, TypeUserCreate } from "@/types/components/auth";
import md5 from "md5";
import { TypeFireStoreForgot, fireStoreForgot } from "../firebase/forgot";

class Repository {
  __fireStore: TypeFireStore;
  __fireStoreForgot: TypeFireStoreForgot;

  constructor() {
    this.__fireStore = fireStore;
    this.__fireStoreForgot = fireStoreForgot;
  }

  async changePassword({ password, rePassword, email }: TypePassword) {
    const user = await this.__fireStore.GetUser(email);
    console.log(user);
    if (!user) return Promise.reject("Usuário nao existem");
    if (password !== rePassword) return "A senha nao se colidem";
    await this.__fireStore.UpdateUserPassword(md5(password), user.id);
    return "a senha foi alterar";
  }

  async CheckCode({ code, user_id }: any) {
    const codeDb: any = await this.__fireStoreForgot.GetForgot(user_id);
    if (codeDb !== null && codeDb.code !== code)
      return Promise.reject("O código esta invalido");
    return "O código esta valido";
  }

  async Forgot({ email }: any) {
    const exists = await this.__fireStore.GetUser(email);
    if (!exists) return Promise.reject("Usuário nao existem");
    this.__fireStoreForgot.AddForgot({
      user_id: exists.id,
      date: new Date(),
      code: "123456",
    });
  }

  async AddUser({
    confirmPassword,
    email,
    fullName,
    password,
  }: TypeUserCreate) {
    const exists = await this.__fireStore.GetUser(email);
    if (exists) return Promise.reject("Usuário já cadastrado.");
    if (confirmPassword !== password)
      return Promise.reject(
        "As senhas não coincidem. Por favor, digite senhas iguais nos campos 'Senha' e 'Confirmar Senha'."
      );
    this.__fireStore.AddUser({
      fullName: fullName,
      username: email,
      password: md5(password),
    });
  }
}

export const repository = new Repository();
