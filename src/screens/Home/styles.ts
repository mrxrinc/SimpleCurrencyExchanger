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

export const AllCountriesWrapper = styled.FlatList`
  padding: 0 20px;
`;

export const CountryNameRowContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
`;

export const CountryFlagWrapper = styled.View`
  margin-right: 10px;
  border-radius: 8px;
  overflow: hidden;
`;

export const FlagStyle = {
  width: 40,
  height: 25,
  backgroundColor: colors.grayLighter,
};

export const ItemSeparator = styled.View`
  width: 100%;
  height: 1px;
  align-self: center;
  background-color: ${colors.grayLight};
`;
