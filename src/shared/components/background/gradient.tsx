import { Gradient, HandleBack } from "./styled";
import { Icons } from "@assets/index";
import { ImageBackground } from "react-native";
import { ReactNode } from "react";
import { SkeletonComponent } from "./skeleton";

type Props = {
  img?: {
    path: string;
    extension: string;
  };
  children: ReactNode;
  loader?: boolean;
  back: Function;
};

export const GradientComponent = ({ img, children, back, loader }: Props) => (
  <ImageBackground
    source={{
      uri: `${img?.path}.${img?.extension}`,
    }}
  >
    <HandleBack onPress={() => back()}>
      <Icons.Nav.Back fill={"#fff"} stroke={"#fff"} />
    </HandleBack>
    <Gradient colors={["transparent", "#000000"]}>
      {loader && <SkeletonComponent />}
      {!loader && children}
    </Gradient>
  </ImageBackground>
);
