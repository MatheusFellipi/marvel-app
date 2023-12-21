import { Icons } from "@assets/index";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { SubtitleText, TextDescription } from "@/shared/style/font";
import { useRouter } from "expo-router";
import { Forgot, Form } from "../styles";
import { BackGroundComponents } from "../components/background";
import { SubmitBtnGradient } from "../components/submitBtn";

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
    }
    
    const updatedValue = inputRefs.map((ref) => ref.current?.value || "").join("");
    setValue(updatedValue);
  };

  const handleLogin = async () => {
    router.push({pathname:"login/changePassword"})
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
        <View style={styles.container}>
          {inputRefs.map((inputRef, index) => (
            <TextInput
              key={index}
              ref={inputRef}
              style={styles.input}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange(text, index)}
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
              <TextDescription color="greyLight">
                Reenvia código
              </TextDescription>
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
