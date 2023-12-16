import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";

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

export const ListAll = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
