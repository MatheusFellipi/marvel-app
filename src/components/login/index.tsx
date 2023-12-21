import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { checkLogin } from "./validade";
import { controllerAuth } from "@/services/auth";
import { TypeAuth } from "@/types/components/auth";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { FormLoginComponent } from "./components/form";
import { BackGroundComponents } from "./components/background";
import { FooterComponent } from "./components/footer";

export const LoginComponents = () => {
  const { navigate } = useNavigation();
  const [loader, setLoader] = useState(false);
  const [values, setValues] = useState<TypeAuth>({
    username: "matheus@hotmail.com.br",
    password: "test",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    const { erros, isErrors } = await checkLogin(values);
    if (isErrors) {
      setErrors(erros);
      return;
    } else {
      setErrors({ password: "", username: "" });
    }
    setLoader(true);
    try {
      const login = await controllerAuth.Login(values);
      await AsyncStorage.setItem("my-token", login.token);
      setLoader(false);
      navigate("home/index" as never);
    } catch (error: any) {
      setLoader(false);
      Alert.alert("aviso", error);
    }
  };

  return (
    <BackGroundComponents>
      <FormLoginComponent
        values={values}
        loader={loader}
        setValues={setValues}
        errors={errors}
        submit={handleLogin}
      />
      <FooterComponent />
    </BackGroundComponents>
  );
};
