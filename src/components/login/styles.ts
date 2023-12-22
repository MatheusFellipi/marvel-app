import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get("screen");

export const LineGradient = styled(LinearGradient)`
  height: 1px;
  width: 100px;
`;

export const Form = styled.View`
  margin-top: 80px;
  height: ${height - 250}px;
  padding: 0 30px;
  border-radius: 59px 59px 0 0;
  background-color: #240024;
`;

export const Forgot = styled.TouchableOpacity`
  align-items: flex-end;
  margin-top: 10px;
  margin-bottom: 24px;
`;

export const Gradient = styled(LinearGradient)`
  height: 150px;
  width: 100%;
`;
