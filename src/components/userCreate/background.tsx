import {
  View,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import CircularBoxShadow from "@/components/login/text";
import { ReactNode } from "react";

const { height } = Dimensions.get("screen");

export const UserCreateBackgroundComponents = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          height: height,
          paddingTop: 30,
          backgroundColor: "#240024",
          paddingHorizontal: 24,
        }}
      >
        {children}
        <CircularBoxShadow
          position={{
            left: 0,
            bottom: -10,
          }}
          distance={300}
          color="#C45647  "
        />
        <CircularBoxShadow
          position={{
            right: -90,
            top: 100,
          }}
          distance={200}
          color="#B379DF "
        />
        <CircularBoxShadow
          position={{
            left: 20,
          }}
          distance={30}
          color="#B379DF "
        />

        <CircularBoxShadow
          position={{
            right: -60,
            bottom: -20,
          }}
          distance={200}
          color="#B379DF "
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
