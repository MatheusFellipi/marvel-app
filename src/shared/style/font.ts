import { TypeColors } from "@/types/shared/theme";
import styled from "styled-components/native";

type Props = {
  color?: keyof TypeColors;
  size?: number;
  margin?: number[];
};

export const ProfileTitle = styled.Text<Props>`
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  font-family: "Poppins_500Medium";
  font-size: 40px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const ProfileSubtitle500 = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: ${(props) => props.size ?? 16}px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const ProfileSubtitle600 = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_600SemiBold";
  font-size: ${(props) => props.size ?? 16}px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const ProfileDescription = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: ${(props) => props.size ?? 14}px;
  text-align: justify;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const TextDescription = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: ${(props) => props.size ?? 15}px;
  text-align: justify;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const SubtitleText = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_700Bold";
  font-size: ${(props) => props.size ?? 18}px;
  font-style: normal;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const AlertText = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: ${(props) => props.size ?? 12}px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
`;

export const TextDescriptionPoppinsLight = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_500Medium";
  font-size: ${(props) => props.size ?? 12}px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
  max-height: 220px;
  text-align: justify;
`;

export const TextSemiBold = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_600SemiBold";
  font-size: ${(props) => props.size ?? 16}px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
  max-height: 250px;
  text-align: justify;
`;

export const TextBlack = styled.Text<Props>`
  color: ${(props) => props.theme.colors[props.color ?? "white"]};
  font-family: "Poppins_900Black";
  font-size: ${(props) => props.size ?? 20}px;
  max-height: 250px;
  margin: ${(props) =>
    Array.isArray(props.margin)
      ? props.margin.map((m) => `${m}px`).join(" ")
      : props.margin ?? "0px"};
  text-align: center;
`;
