import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { height } = Dimensions.get("screen");

export const Container = styled.View`
  color: ${(props) => props.theme.colors.black};
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

export const TextTitleProfile = styled.Text`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
  font-size: 40px;
  margin-bottom: 48px;
`;

export const TextDescription = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
  font-size: 15px;
  text-align: justify;
`;
