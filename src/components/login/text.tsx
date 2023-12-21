import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { number } from "yup";

type Props = {
  color?: string;
  distance?: number;
  position?: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
};

const CircularBoxShadow = ({
  color,
  position = { bottom: -10, left: 0 },
  distance,
}: Props) => {
  return (
    <View
      style={{
        position: "absolute",
        ...position,
        opacity:0.6
      }}
    >
      <Shadow
        style={{ zIndex: -1 }}
        distance={distance ?? 200}
        startColor={color ?? "#eb9066d8"}
        offset={[3, 4]}
      >
        <View
          style={{
            height: 10,
            width: 10,
          }}
        ></View>
      </Shadow>
    </View>
  );
};

export default CircularBoxShadow;
