import styled from "styled-components/native";

export const Characteristics = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 28px;
`;

export const BtnStories = styled.TouchableOpacity`
  justify-content: center;
  border-radius: 16px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  height: 60;
  margin-top: 30;
`;
