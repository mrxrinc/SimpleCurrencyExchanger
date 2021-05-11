import styled from "styled-components/native";
import { colors, appFontFamily, appFontFamilyBold, appTextSize } from "theme";

export interface StyledTextProps {
  size?: number;
  color?: string;
  bold?: boolean;
}

export const StyledText = styled.Text<StyledTextProps>`
  color: ${props => props.color || colors.text};
  font-family: ${props => (!props.bold ? appFontFamily : appFontFamilyBold)};
  font-size: ${props => (props.size ? props.size + "px" : appTextSize)};
`;
