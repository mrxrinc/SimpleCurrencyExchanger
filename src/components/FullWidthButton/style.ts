import styled from "styled-components/native";
import { colors } from "theme";

interface ContainerProps {
  color?: string;
  customStyle?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${props => props.color || colors.primary};
  ${props => props.customStyle}
`;

export const LoadingWrapper = styled.View``;

export const TitleStyle = `
  margin-left: 10px;
  margin-top: 5px;
`;
