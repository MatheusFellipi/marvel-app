import { TypeColors } from "@/types/shared/theme";
import styled from "styled-components/native";

type Props = {
  color?: keyof TypeColors;
};

export const ProfileTitle = styled.Text<Props>`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
  font-size: 40px;
  margin-bottom: 48px;
`;

export const ProfileSubtitle500 = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: 16px;
`;

export const ProfileSubtitle600 = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_600SemiBold";
  font-size: 16px;
`;

export const ProfileDescription = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: 14px;
  text-align: justify;
`;

export const TextDescription = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: 15px;
  text-align: justify;
`;

export const SubtitleText = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_700Bold";
  font-size: 18px;
  font-style: normal;
  margin-top: 28px;
`;

export const AlertText = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: 12;
`;
