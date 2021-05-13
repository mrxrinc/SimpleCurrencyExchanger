import React, { FC, useState, useMemo, useCallback } from "react";
import { colors, Text, Icon } from "theme";
import Image from "react-native-remote-svg";
import Header from "components/Header";
import Modal from "components/Modal";
import { CountryType } from "types/country";
import Loading from "components/Loading";
import EmptyList from "components/EmptyList";
import { getAllCountries } from "utils/apiHelper";
import { HomeProps } from "navigation/RootStack";
import {
  Container,
  Content,
  SearchLabel,
  SearchInputWrapper,
  TextInput,
  SearchButton,
  AllCountriesButton,
  AllCountriesWrapper,
  CountryNameRowContainer,
  CountryFlagWrapper,
  FlagStyle,
  ItemSeparator,
} from "./styles";

interface FetchCountry {
  keyword?: string;
}

interface CountryRowProps {
  name: string;
  flag?: string;
  alpha3Code: string;
}

const Home: FC<HomeProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [showCountriesModal, setShowCountriesModal] = useState<boolean>(false);
  const [countries, setCountries] = useState<CountryType[]>([]);

  const fetchCountry = ({ keyword }: FetchCountry) => {
    console.log(keyword);
  };

  const renderCountryRow = ({ item }: { item: CountryRowProps }) => {
    return (
      <CountryNameRowContainer
        onPress={() => {
          setShowCountriesModal(false);
          navigation.navigate("CountryDetail", {
            fullName: item.name,
          });
        }}>
        <CountryFlagWrapper>
          <Image source={{ uri: `${item?.flag}` }} style={FlagStyle} />
        </CountryFlagWrapper>
        <Text numberOfLines={1}>{item?.name}</Text>
      </CountryNameRowContainer>
    );
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

        <AllCountriesButton onPress={() => setShowCountriesModal(true)}>
          <Text size={16} color={colors.grayDark}>
            All Countries
          </Text>
        </AllCountriesButton>
      </Content>

      <Modal
        showModal={showCountriesModal}
        setShowModal={setShowCountriesModal}
        onOpen={() => getAllCountries({ setIsLoading, setCountries })}
        title="All Countries">
        {isLoading ? (
          <Loading />
        ) : countries.length === 0 ? (
          <EmptyList />
        ) : (
          <AllCountriesWrapper
            data={countries}
            renderItem={renderCountryRow}
            ItemSeparatorComponent={() => <ItemSeparator />}
            keyExtractor={item => item.alpha3Code}
          />
        )}
      </Modal>
    </Container>
  );
};

export default Home;
