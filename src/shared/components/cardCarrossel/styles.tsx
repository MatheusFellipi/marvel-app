import styled from "styled-components/native";
import { StyleSheet } from 'react-native';

export const CardsCarrossel = styled.TouchableOpacity`
  position: relative;
  width: 140px;
  height: 230px;
  margin: 16px;
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
    width: '100%',
    borderRadius: 16,
  },
});