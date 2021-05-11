import styled from "styled-components/native";
import { colors } from "theme";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  padding: 0px 20px;
  flex: 1;
`;

export const SearchLabel = styled.View`
  margin-top: 70px;
  align-items: center;
`;

export const SearchInputWrapper = styled.View<{ focused: boolean }>`
  flex: 1;
  height: 40px;
  border-radius: 7px;
  border: 1px solid
    ${props => (props.focused ? colors.grayDark : colors.grayLight)};
  flex-direction: row;
  margin-top: 20px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  width: 300px;
  padding: 0 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  max-width: 40px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AllCountriesButton = styled.TouchableOpacity`
  margin-top: 90px;
  align-self: center;
`;
