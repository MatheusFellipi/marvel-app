import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const CardsCarrossel = styled.TouchableOpacity`
  position: relative;
  width: 140px;
  height: 230px;
  margin: 24px 16px 0 16px;
  border-radius: 16px;
`;

export const TextTitleCard = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
  font-size: 20px;
  position: absolute;
  left: 12px;
  bottom: 12px;
`;

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    borderRadius: 16,
  },
});

export const SkeletonCarrossel = styled.View`
  flex-direction: row;
  padding-left: 24px;
  margin-top: 16px;
  gap: 16px;
`;

type Props = {
  color?: "red" | "white";
};

export const SubtitleText = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_700Bold";
  font-size: 18px;
  font-style: normal;
  margin-top: 28px;
  margin-left: 24px;
`;
