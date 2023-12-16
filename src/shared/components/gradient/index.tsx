import { Icons } from "@assets/index";
import { ImageBackground } from "react-native";
import { Gradient, HandleBack } from "./styled";
import { ReactNode } from "react";

type Props = {
  data?: {
    path: string;
    extension: string;
  };
  children: ReactNode;
  back: Function;
};

export const GradientComponent = ({ data, children, back }: Props) => (
  <ImageBackground
    source={{
      uri: `${data?.path}.${data?.extension}`,
    }}
  >
    <HandleBack onPress={() => back()}>
      <Icons.Nav.Back fill={"#fff"} stroke={"#fff"} />
    </HandleBack>
    <Gradient colors={["transparent", "#000000"]}>{children}</Gradient>
  </ImageBackground>
);
