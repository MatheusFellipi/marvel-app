import { css } from "styled-components";
import styled from "styled-components/native";

export const SearchIcon = styled.TouchableOpacity`
  justify-content: center;
  position: absolute;
  height: 64px;
  width: 50px;
  right: 0;
`;

export const FilterBtn = styled.TouchableOpacity<{ select: boolean }>`
  ${({ select }) => css`
    background-color: ${(props) =>
      select ? props.theme.colors.dark : props.theme.colors.white};
  `}

  border: 1px solid ${(props) => props.theme.colors.dark};
  height: 35px;
  margin: 0 5px 0 5px;
  border-radius: 26px;
  justify-content: center;
  padding: 0 9px;
`;

export const CardSearch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 160px;
  padding: 12px;
  border-radius: 14px;
  margin-top: 24px;
  background-color: ${(props) => props.theme.colors.dark};
`;
