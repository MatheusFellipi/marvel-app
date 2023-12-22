import { Form, Gradient } from "../styles";
import { Image, ImageBackground } from "expo-image";
import { ReactNode } from "react";
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CircularBoxShadow from "../text";
import { Icons } from "@assets/index";

type Props = {
  children: ReactNode;
  back?: Function;
};

export const BackGroundComponents = ({ children, back }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          position: "relative",
        }}
      >
        {back && (
          <TouchableOpacity
            onPress={() => back()}
            style={{
              position: "absolute",
              top: 40,
              left: 20,
              width: 40,
              height: 40,
              zIndex: 1,
            }}
          >
            <Icons.Nav.Back />
          </TouchableOpacity>
        )}
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

        <Form>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              zIndex: 3,
            }}
          >
            {children}
          </View>
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

          <View
            style={{
              position: "absolute",
              top: 40,
              right: 0,
            }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={require("../../../../assets/image/shapes.png")}
            />
          </View>

          <CircularBoxShadow
            position={{
              right: -60,
              bottom: -20,
            }}
            distance={200}
            color="#B379DF "
          />
        </Form>
      </View>
    </TouchableWithoutFeedback>
  );
};
