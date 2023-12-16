import { TextComponentsProps } from "@/types/shared/components/text";
import styled, { css } from "styled-components/native";

type Props = {
  text: TextComponentsProps;
};

export const Text = styled.Text<Props>`
  ${({ text }) => css`
    margin: ${text?.margin?.top ?? 0}px ${text?.margin?.right ?? 0}px
      ${text?.margin?.bottom ?? 0}px ${text?.margin?.left ?? 0}px;
    padding: ${text?.padding?.top ?? 0}px ${text?.padding?.right ?? 0}px
      ${text?.padding?.bottom ?? 0}px ${text?.padding?.left ?? 0}px;
    color: ${(props) => text?.TextColor ?? props.theme.colors.dark};
    font-size: ${text?.fontSize}px;
    font-family: ${text?.fontFamily ?? "Poppins_400Regular"};
    text-transform: ${text.textTransform};
    ${text.maxWidth && `max-width:${text.maxWidth}px;`}
  `}
`;
