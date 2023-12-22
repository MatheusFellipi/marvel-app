import { BackGroundComponents } from "../components/background";
import { controllerUser } from "@/services/users";
import { Forgot } from "../styles";
import { SubmitBtnGradient } from "../components/submitBtn";
import { SubtitleText, TextDescription } from "@/shared/style/font";
import { TypeCodeForgot } from "@/types/components/auth";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, TextInput, View } from "react-native";

type InputRef = React.RefObject<TextInput>;

export const CodeForgotComponents = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(45);
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState("");

  const inputRefs: InputRef[] = Array(6)
    .fill(null)
    .map(() => useRef<TextInput>(null));

  const handleInputChange = (text: string, index: number) => {
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    } else if (text.length === 0 && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleLogin = async () => {
    setLoader(true);

    const data = {
      code: value,
      user_id: "matheus@hotmail.com.br",
    } as TypeCodeForgot;

    try {
      const res = await controllerUser.CheckCode(data);
      Alert.alert("aviso", res);
      router.push({ pathname: "login/changePassword" });
      setLoader(false);
    } catch (error: any) {
      Alert.alert("aviso", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <BackGroundComponents back={() => router.back()}>
      <SubtitleText size={30} margin={[30, 0, 0, 0]}>
        Recuperar a senha
      </SubtitleText>
      <View style={styles.container}>
        {inputRefs.map((inputRef, index) => (
          <TextInput
            key={index}
            ref={inputRef}
            style={{
              ...styles.input,
              color: "#A4A4A4",
              fontFamily: "Poppins_500Medium",
              fontSize: 14.33,
            }}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => {
              const updatedValue = [...value];
              updatedValue[index] = text;
              setValue(updatedValue.join(""));

              handleInputChange(text, index);
            }}
            value={value[index]}
          />
        ))}
      </View>
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: "100%",
          paddingHorizontal: 30,
        }}
      >
        {countdown !== 0 && (
          <TextDescription color="greyLight">
            Reenvia código em {countdown}
          </TextDescription>
        )}

        {countdown === 0 && (
          <Forgot
            onPress={() => {
              setCountdown(45);
            }}
          >
            <TextDescription color="greyLight">Reenvia código</TextDescription>
          </Forgot>
        )}
      </View>
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
