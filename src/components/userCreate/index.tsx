import { Alert, Button, View } from "react-native";
import { createCheck } from "./validade";
import { InputComponent } from "@/shared/components/input";
import { ProfileTitle, TextSemiBold } from "@/shared/style/font";
import { UserCreateBackgroundComponents } from "./background";
import { useState } from "react";
import { InputCreateComponent } from "./input";
import { SubmitBtnGradient } from "../login/components/submitBtn";

export const UserCreateComponent = () => {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSignUp = async () => {
    const { erros, isErrors } = await createCheck(values);
    if (isErrors) {
      setErrors(erros);
      return;
    }
    setLoader(true);

    try {
      Alert.alert("Cadastro realizado com sucesso!");
    } catch (error) {
    } finally {
      setLoader(true);
    }
  };

  return (
    <UserCreateBackgroundComponents>
      <View>
        <ProfileTitle>Bem-vindo!</ProfileTitle>
        <TextSemiBold color="greyLight">
          Vamos lá! Cadastre-se e aproveite o melhor do universo Marvel.
        </TextSemiBold>
      </View>

      <InputCreateComponent
        value={values.fullName}
        errors={errors.fullName}
        onChangeText={(text: string) => {
          setValues({
            ...values,
            fullName: text,
          });
        }}
        label={"Nome"}
        secureTextEntry={false}
      />
      <InputCreateComponent
        value={values.email}
        errors={errors.email}
        label="E-mail"
        onChangeText={(text: string) => {
          setValues({
            ...values,
            email: text.toLowerCase(),
          });
        }}
        secureTextEntry={false}
      />
      <InputCreateComponent
        value={values.password}
        errors={errors.password}
        label="Senha"
        secureTextEntry={true}
        onChangeText={(text: string) => {
          setValues({
            ...values,
            password: text,
          });
        }}
      />
      <InputCreateComponent
        value={values.confirmPassword}
        errors={errors.confirmPassword}
        label="Confirmar Senha"
        secureTextEntry={true}
        onChangeText={(text) => {
          setValues({
            ...values,
            confirmPassword: text,
          });
        }}
      />
      <View style={{ marginTop: 30 }}>
        <SubmitBtnGradient
          label={"cadastrar"}
          loader={loader}
          onPress={handleSignUp}
        />
      </View>
    </UserCreateBackgroundComponents>
  );
};
