import styled from "styled-components/native";

export const TextHome = styled.Text`
  color: ${(props) => props.theme.colors.grey};
  font-family: "Poppins_500Medium";
  font-size: 14px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.dark};
  font-family: "Poppins_600SemiBold";
  font-size: 32px;
`;

export const Header = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  height: 64px;
`;

export const SearchIcon = styled.TouchableOpacity`
  justify-content: center;
  position: absolute;
  height: 64px;
  width: 50px;
  right: 0;
`;
