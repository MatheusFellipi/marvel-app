import { InputComponentProps } from "@/types/shared/components/input";
import styled, { DefaultTheme, css } from "styled-components/native";

type Props = {
  input?: InputComponentProps;
  theme?: DefaultTheme;
};

export const Container = styled.View<Props>`
  ${({ input }) => css`
    width: 100%;
    flex-direction: column;
    border-radius: ${input?.bRadius ?? "16px"};
    margin: ${input?.margin?.top ?? 0}px ${input?.margin?.right ?? 0}px
      ${input?.margin?.bottom ?? 0}px ${input?.margin?.left ?? 0}px;
    padding: ${input?.padding?.top ?? 0}px ${input?.padding?.right ?? 0}px
      ${input?.padding?.bottom ?? 0}px ${input?.padding?.left ?? 0}px;
  `};
`;

export const IsShowPass = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  justify-content: center;
  align-items: center;
`;

export const ContainerInput = styled.View<Props>`
  ${({ theme, input }) => css`
    position: relative;
    flex-direction: row;
    align-items: center;
    border: ${input?.border ?? "1px solid #313140"};
    height: ${input?.height ?? "40px"};
    border-radius: ${input?.bRadius ?? "16px"};
    background-color: ${input?.bgColor ?? theme.colors.white};
  `};
`;

export const Input = styled.TextInput.attrs<Props>(({ theme, input }) => ({
  placeholderTextColor: input?.colorFont ?? theme.colors.dark,
  fontFamily: "Poppins_500Medium",
  fontSize: input?.fontSize,
}))`
  ${({ theme, input }) => css`
    color: ${input?.colorFont ?? theme.colors.dark};
    padding: 10px 20px;
    height: 100%;
    width: 100%;
    border-radius: ${input?.bRadius ?? "16px"};
    width: 100%;
  `}
`;
