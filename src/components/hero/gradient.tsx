import { Icons } from "@assets/index";
import { ImageBackground } from "react-native";
import { Scroll } from "@/shared/components/scroll";
import { Gradient, HandleBack } from "./styled";
import { ReactNode } from "react";
import { DefaultTheme } from "styled-components/native";
import { TypeCharactersDetails } from "@/types/components/heros";

type Props = {
  data?: TypeCharactersDetails;
  theme: DefaultTheme;
  children: ReactNode;
  back: Function
};

export const GradientComponent = ({ data, theme, children ,back}: Props) => (
  <Scroll bgColor={theme.colors.black}>
    <ImageBackground
      source={{
        uri: `${data?.thumbnail?.path}.${data?.thumbnail?.extension}`,
      }}
    >
      <HandleBack onPress={() => back()}>
        <Icons.Nav.Back fill={"#fff"} stroke={"#fff"} />
      </HandleBack>
      <Gradient
        colors={[
          "transparent",
          "#000000",
        ]}
      >
        {children}
      </Gradient>
    </ImageBackground>
  </Scroll>
);
