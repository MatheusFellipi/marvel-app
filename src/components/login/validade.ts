import * as yup from "yup";
import { TypeAuth, TypeForgot, TypePassword } from "@/types/components/auth";

let loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Email inválido")
    .required("O email é obrigatório")
    .lowercase(),
  password: yup.string().required("A senha é obrigatória"),
});

export const checkLogin = async (
  values: TypeAuth
): Promise<{ isErrors: boolean; erros: TypeAuth }> => {
  let erros = { password: "", username: "" } as TypeAuth;
  try {
    await loginSchema.validate(values, { abortEarly: false });
    return { isErrors: false, erros };
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const validationErrors: TypeAuth = {} as TypeAuth;
      error.inner.forEach((err: any) => {
        validationErrors[err.path as keyof TypeAuth] = err.message;
      });
      erros = {
        ...validationErrors,
      };
    } else {
      console.error("Ocorreu um erro ao validar o formulário", error);
    }
    return { isErrors: true, erros };
  }
};

let forgot = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("O email é obrigatório")
    .lowercase(),
});

export const forgotCheck = async (
  values: TypeForgot
): Promise<{ isErrors: boolean; erros: string }> => {
  let erros = "";
  try {
    await forgot.validate(values, { abortEarly: false });
    return { isErrors: false, erros };
  } catch (error: any) {
    if (error.name === "ValidationError") {
      erros = error.inner.message;
    }
    return { isErrors: true, erros };
  }
};

let password = yup.object().shape({
  password: yup.string().required("A senha é obrigatória"),
  rePassword: yup.string().required("A senha é obrigatória"),
});

export const passwordCheck = async (
  values: {}
): Promise<{ isErrors: boolean; erros: TypePassword }> => {
  let erros = { password: "", rePassword: "" } as TypePassword;
  try {
    await password.validate(values, { abortEarly: false });
    return { isErrors: false, erros };
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const validationErrors: TypePassword = {} as TypePassword;
      error.inner.forEach((err: any) => {
        validationErrors[err.path as keyof TypePassword] = err.message;
      });
      erros = {
        ...validationErrors,
      };
    } else {
      console.error("Ocorreu um erro ao validar o formulário", error);
    }
    return { isErrors: true, erros };
  }
};
