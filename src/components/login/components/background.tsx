import { Gradient } from "../styles";
import { ImageBackground } from "expo-image";
import { ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

type Props = {
  children: ReactNode;
};

export const BackGroundComponents = ({ children }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          position: "relative",
        }}
      >
        <ImageBackground
          style={{
            height: 150,
            transform: [
              { scale: 2.4 },
              { translateX: -50 },
              { translateY: 40 },
            ],
          }}
          source={require("../../../../assets/image/shadow-black-panther.png")}
        >
          <Gradient colors={["transparent", "#000000"]} />
        </ImageBackground>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};
