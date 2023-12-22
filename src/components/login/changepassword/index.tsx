import { Icons } from "@assets/index";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SubtitleText } from "@/shared/style/font";
import { useRouter } from "expo-router";
import { BackGroundComponents } from "../components/background";
import { SubmitBtnGradient } from "../components/submitBtn";
import { InputLoginComponent } from "../components/input";
import { passwordCheck } from "../validade";
import { controllerUser } from "@/services/users";

export const ChangePasswordComponents = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState({
    password: "",
    rePassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    rePassword: "",
  });

  const handleLogin = async () => {
    const { erros, isErrors } = await passwordCheck(values);
    if (isErrors) {
      setErrors(erros);
      return;
    } else {
      setErrors({ password: "", rePassword: "" });
    }

    if (values.password !== values.rePassword) {
      Alert.alert(
        "Aviso",
        "As senhas não são iguais. Por favor, verifique e tente novamente."
      );
      return;
    }
    setLoader(true);
    try {
      const data = {
        ...values,
        email: "matheus@hotmail.com.br",
      };
      const res = await controllerUser.changePassword(data);
      setLoader(false);
      Alert.alert("aviso", res);
      router.push({ pathname: "/" });
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
      setLoader(false);
    }
  };

  return (
    <BackGroundComponents back={() => router.back()}>
      <SubtitleText size={30} margin={[30, 0, 0, 0]}>
        Trocar a senha
      </SubtitleText>
      <InputLoginComponent
        errorLabel={errors.password}
        label="Senha"
        icon={<Icons.Key />}
        value={values.password}
        onChangeText={(text) => {
          setValues({
            ...values,
            password: text,
          });
        }}
      />
      <InputLoginComponent
        errorLabel={errors.rePassword}
        label="Confirmar Senha"
        icon={<Icons.Key />}
        value={values.rePassword}
        onChangeText={(text) => {
          setValues({
            ...values,
            rePassword: text,
          });
        }}
      />

      <View style={{ marginTop: 20, width: "100%" }}>
        <SubmitBtnGradient
          label="enviar"
          onPress={handleLogin}
          loader={loader}
        />
      </View>
    </BackGroundComponents>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    width: 40,
    height: 40,
    textAlign: "center",
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
