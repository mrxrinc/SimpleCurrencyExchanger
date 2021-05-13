import styled from "styled-components/native";
import { colors } from "theme";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0px 20px;
`;

export const SearchLabel = styled.View`
  margin-top: 70px;
  align-items: center;
`;

export const SearchInputWrapper = styled.View<{ focused: boolean }>`
  height: 40px;
  border-radius: 7px;
  border: 1px solid
    ${props => (props.focused ? colors.grayDark : colors.grayLight)};
  flex-direction: row;

  margin-top: 20px;
  z-index: 1;
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

export const SuggestionPopup = styled.View`
  width: 98%;
  min-height: 40px;
  max-height: 250px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: absolute;
  top: 160px;
  left: 1%;
  margin: 0 20px;
  border: 1px ${colors.grayLight};
  background-color: ${colors.grayLighter};
  justify-content: center;
  elevation: 15;
`;

export const SuggestionList = styled.FlatList`
  padding: 0 20px;
`;

export const SuggestionItem = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  justify-content: center;
`;

export const AllCountriesButton = styled.TouchableOpacity`
  margin-top: 90px;
  align-self: center;
`;

export const AllCountriesWrapper = styled.FlatList`
  padding: 0 20px;
`;

export const CountryNameRowContainer = styled.TouchableOpacity`
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
