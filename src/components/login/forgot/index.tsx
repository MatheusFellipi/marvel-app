import { Alert, View } from 'react-native';
import { BackGroundComponents } from '../components/background';
import { controllerUser } from '@/services/users';
import { Forgot } from '../styles';
import { forgotCheck } from '../validade';
import { Icons } from '@assets/index';
import { InputLoginComponent } from '../components/input';
import { SubmitBtnGradient } from '../components/submitBtn';
import { SubtitleText, TextDescription } from '@/shared/style/font';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export const ForgotComponents = () => {
  const router = useRouter();
  const [values, setValues] = useState("matheus@hotmail.com.br");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState("");

  const handleLogin = async () => {
    const { erros, isErrors } = await forgotCheck({ email: values });
    if (isErrors) {
      setErrors(erros);
      return;
    } else setErrors("");
    setLoader(true);
    try {
      await controllerUser.Forgot({ email: values });
      Alert.alert("aviso", "O código foi enviado para seu email");
      setLoader(false);
      router.push({ pathname: "login/codeForgot" });
    } catch (error: any) {
      setLoader(false);
      Alert.alert("aviso", error);
    }
  };

  return (
    <BackGroundComponents back={() => router.back()}>
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
    </BackGroundComponents>
  );
};
