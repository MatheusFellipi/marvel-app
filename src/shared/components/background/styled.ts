import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const Gradient = styled(LinearGradient)`
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

export const Characteristics = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;
