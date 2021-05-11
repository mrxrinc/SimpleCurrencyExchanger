import React, { FC, useState } from "react";
import { colors, Text, Icon } from "theme";
import Header from "components/Header";
import {
  Container,
  Content,
  SearchLabel,
  SearchInputWrapper,
  TextInput,
  SearchButton,
  AllCountriesButton,
} from "./styles";

interface FetchCountry {
  keyword?: string;
}

const Home: FC = () => {
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const fetchCountry = ({ keyword }: FetchCountry) => {
    console.log(keyword);
  };

  return (
    <Container>
      <Header />
      <Content>
        <SearchLabel>
          <Text size={18}>Enter Country Name:</Text>
        </SearchLabel>

        <SearchInputWrapper focused={onFocus}>
          <TextInput
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            onChangeText={(keyword: string) => fetchCountry({ keyword })}
          />
          <SearchButton>
            <Icon name="search" size={22} color={colors.grayDarker} />
          </SearchButton>
        </SearchInputWrapper>

        <AllCountriesButton>
          <Text size={16} color={colors.grayDark}>
            All Countries
          </Text>
        </AllCountriesButton>
      </Content>
    </Container>
  );
};

export default Home;
