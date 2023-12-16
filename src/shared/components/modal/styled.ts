import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { css } from "styled-components";

const { height } = Dimensions.get("window");

type Props = {
  isKeyboard: boolean;
};

export const Container = styled.View<Props>`
  ${({ isKeyboard }) => css`
    padding-top: ${() => (isKeyboard ? "150px" : "opx")};
  `};
  background-color: white;
  height: ${height}px;
`;

export const ModalWrapContent = styled.View`
  background-color: white;
  position: relative;
  min-height: ${height - 150}px;
  border-radius: 15px 15px 0px 0px;
`;

export const White = styled.View`
  position: relative;
  flex-direction: row;
  border-radius: 15px 15px 0px 0px;
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
