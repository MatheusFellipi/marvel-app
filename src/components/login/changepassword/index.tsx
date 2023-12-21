import { Icons } from "@assets/index";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SubtitleText, TextDescription } from "@/shared/style/font";
import { useRouter } from "expo-router";
import { Forgot, Form } from "../styles";
import { BackGroundComponents } from "../components/background";
import { SubmitBtnGradient } from "../components/submitBtn";
import { InputLoginComponent } from "../components/input";

export const ChangePasswordComponents = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(45);
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
    if (values.password !== values.rePassword)
      Alert.alert(
        "Aviso",
        "As senhas não são iguais. Por favor, verifique e tente novamente."
      );

    try {
      router.push({ pathname: "login" });
    } catch (error) {}

    router.push({ pathname: "login/index" });
  };

  return (
    <BackGroundComponents>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={{
          position: "absolute",
          top: 40,
          left: 20,
          width: 40,
          height: 40,
        }}
      >
        <Icons.Nav.Back />
      </TouchableOpacity>
      <Form>
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
          label="Repede a senha"
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
      </Form>
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
