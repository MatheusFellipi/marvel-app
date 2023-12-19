import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 37px;
`;

export const Divider = styled.View`
  width: 2px;
  height: 54px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const CardNameEvents = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.dark};
  padding: 10px 18px;
  border-radius: 16px;
`;
