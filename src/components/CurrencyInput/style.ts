import styled from "styled-components/native";
import { colors, appFontFamilyBold } from "theme";

interface ContainerProps {
  focused: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  height: 55px;
  border-radius: 5px;
  border: 1px solid
    ${props => (props.focused ? colors.grayDark : colors.grayLight)};
  flex-direction: row;
  margin-top: 20px;
  overflow: hidden;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  width: 300px;
  padding: 0 20px 5px;
  font-size: 25px;
  color: ${colors.primaryDark};
  font-family: ${appFontFamilyBold};
  font-weight: normal;
`;

export const CurrencyWrapper = styled.View`
  flex-direction: row;
  width: 72px;
  height: 53px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.grayLighter};
`;

export const FlagStyle = {
  width: 20,
  height: 12,
  borderRadius: 5,
  marginRight: 4,
  top: -1,
};
