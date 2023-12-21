import { Icons } from "@assets/index";
import { useState } from "react";
import { controllerAuth } from "@/services/auth";
import { Alert, TouchableOpacity, View } from "react-native";
import { SubtitleText, TextDescription } from "@/shared/style/font";
import { useRouter } from "expo-router";
import { forgotCheck } from "../validade";
import { Forgot, Form } from "../styles";
import { InputLoginComponent } from "../components/input";
import { SubmitBtnGradient } from "../components/submitBtn";
import { BackGroundComponents } from "../components/background";


export const ForgotComponents = () => {
  const router = useRouter();
  const [values, setValues] = useState("matheus@hotmail.com.br");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState("");

  const handleLogin = async () => {
    const { erros, isErrors } = await forgotCheck(values);
    if (isErrors) {
      setErrors(erros);
      return;
    } else setErrors("");

    try {
      await controllerAuth.forgot({ username: values });
      Alert.alert("aviso", "O código foi enviado");
      setLoader(false);
      router.push({ pathname: "codeForgot" });
    } catch (error: any) {
      setLoader(false);
      Alert.alert("aviso", error);
    }
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
          Recuperar a senha
        </SubtitleText>
        <InputLoginComponent
          errorLabel={errors}
          icon={<Icons.User />}
          value={values}
          onChangeText={(text) => {
            setValues(text.toLowerCase());
          }}
        />
        <Forgot
          onPress={() => {
            router.push({ pathname: "login/codeForgot" });
          }}
        >
          <TextDescription color="greyLight">Ja tenho o código</TextDescription>
        </Forgot>
        <View style={{ marginTop: 20, width: "100%" }}>
          <SubmitBtnGradient
            label="recuperar"
            onPress={handleLogin}
            loader={loader}
          />
        </View>
      </Form>
    </BackGroundComponents>
  );
};
