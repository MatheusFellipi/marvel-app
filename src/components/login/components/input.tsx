import { InputComponentProps } from "@/types/shared/components/input";
import { IsIconShowPassComponents } from "@/shared/components/input/icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export const InputLoginComponent = ({
  secureTextEntry = false,
  icon,
  ...props
}: InputComponentProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text
        style={{
          color: "#A4A4A4",
          fontFamily: "Poppins_500Medium",
          fontSize: 14.33,
          marginVertical: 12,
        }}
      >
        {props.label}
      </Text>
      <LinearGradient
        colors={["#fff", "#6d6c6c", "#6d6c6c", "#6d6c6c", "#6d6c6c", "#fff"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.grediant}
      >
        <LinearGradient
          colors={["#6d6c6c", "#494949", "#0e0e0e"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.grediant2}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <View style={{ paddingLeft: 20 }}>{icon}</View>
            <TextInput
              {...props}
              ref={props.inputRef}
              secureTextEntry={showPassword}
              style={{
                color: "#A4A4A4",
                fontSize: 14.33,
                fontFamily: "Poppins_500Medium",
                height: "100%",
                width: "100%",
              }}
            />
            {secureTextEntry && (
              <IsIconShowPassComponents
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}
          </View>
        </LinearGradient>
      </LinearGradient>
      {props.errorLabel && props.errorLabel?.length > 0 && (
        <Text
          style={{
            color: "red",
            fontFamily: "Poppins_500Medium",
            fontSize: 10,
            marginVertical: 2,
          }}
        >
          {props.errorLabel}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  grediant: {
    height: 55,
    width: "100%",
    borderRadius: 16,
    justifyContent: "center",
    alignSelf: "center",
    paddingHorizontal: 1,
  },
  grediant2: {
    height: 54,
    width: "100.1%",
    borderRadius: 16,
    justifyContent: "center",
    alignSelf: "center",
  },
});
