import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("screen");


type Props = {
  secondary?: boolean;
};

export const Container = styled.View`
  padding: 0 24px;
  margin-bottom: 37px;
`;

export const CardVersion = styled.View<Props>`
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    props.secondary ? props.theme.colors.red : props.theme.colors.dark};
  border-radius: 16px;
  height: 60px;
  gap: 10px;
  margin-bottom: 17px;
`;

export const Img = styled.View`
  width: 60px;
  height: 60px;
`;

export const Profile = styled(Image)``;


export const Characteristics = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const Gradient = styled(LinearGradient)`
  height: ${height}px;
  justify-content: center;
  padding-top: 100%;
  padding-left: 24px;
  padding-right: 24px;
`;

export const HandleBack = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 24px;
  width: 50px;
  height: 50px;
  z-index: 1000;
`;
