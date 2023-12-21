import * as yup from "yup";

const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("Nome é obrigatório")
    .test("fullName", "Nome inválido", (value) => {
      if (!value) return false;

      const names = value.split(" ");
      const firstNameValid = names[0].length >= 3;
      const otherNamesValid = names.slice(1).every((name) => name.length >= 2);

      return firstNameValid && otherNamesValid;
    }),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  schema: yup.string().required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem")
    .required("Confirme a senha"),
});

export const createCheck = async (values) => {
  let erros = {};
  try {
    await schema.validate(values, { abortEarly: false });
    return { isErrors: false, erros };
  } catch (error: any) {
    if (error.name === "ValidationError") {
      const validationErrors: any = {} as any;
      error.inner.forEach((err: any) => {
        validationErrors[err.path as keyof any] = err.message;
      });
      erros = {
        ...validationErrors,
      };
    } 
    return { isErrors: true, erros };
  }
};
