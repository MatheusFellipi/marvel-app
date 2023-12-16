import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.View`
  padding-top: 40px;
  background-color: white;
  height: ${height + 50}px;
`;

export const ModalWrapContent = styled.View`
  background-color: white;
  position: relative;
  padding-bottom: 188px;
`;

export const White = styled.View`
  position: relative;
  flex-direction: row;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 16px;
  padding-bottom: 25px;
`;

export const ClosedWhite = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  right: 12px;
  height: 50px;
  width: 50px;
  top: 10px;
`;
