import React, { FC, useState, useEffect } from "react";
import { ListRenderItem } from "react-native";
import { colors, Text, Icon } from "theme";
import Image from "react-native-remote-svg";
import Header from "components/Header";
import Modal from "components/Modal";
import { CountryType } from "types/country";
import Loading from "components/Loading";
import EmptyList from "components/EmptyList";
import { getAllCountries, getCountryByName } from "utils/apiHelper";
import { HomeProps } from "navigation/RootStack";
import CountriesListSkeleton from "components/Skeleton/CountriesList";
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
  SuggestionPopup,
  SuggestionList,
  SuggestionItem,
} from "./styles";

interface FetchCountry {
  name?: string;
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
  const [suggestedCountries, setSuggestedCountries] =
    useState<CountryType | CountryType[] | null>(null);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    fetchCountry({ name: query });
  }, [query]);

  const fetchCountry = ({ name }: FetchCountry) => {
    if (!!name && name.length > 3) {
      getCountryByName({
        setIsLoading,
        name,
        setSuggestedCountries,
      });
    } else {
      setQuery("");
      setSuggestedCountries([]);
    }
  };

  const renderCountryRow: ListRenderItem<CountryRowProps> = ({ item }) => {
    return (
      <CountryNameRowContainer
        onPress={() => {
          setShowCountriesModal(false);
          navigation.navigate("CountryDetail", {
            name: item.name,
          });
        }}>
        <CountryFlagWrapper>
          <Image source={{ uri: `${item?.flag}` }} style={FlagStyle} />
        </CountryFlagWrapper>
        <Text numberOfLines={1}>{item?.name}</Text>
      </CountryNameRowContainer>
    );
  };

  const renderSuggestedItems: ListRenderItem<CountryType> = ({ item }) => {
    return (
      <SuggestionItem
        onPress={() => {
          setShowCountriesModal(false);
          navigation.navigate("CountryDetail", {
            name: item.name,
          });
        }}>
        <Text color={colors.text}>{item.name}</Text>
      </SuggestionItem>
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
            onChangeText={(name: string) => setQuery(name)}
          />
          <SearchButton
            onPress={() =>
              setQuery(() => {
                fetchCountry({});
                return "";
              })
            }>
            {isLoading ? (
              <Loading />
            ) : (
              <Icon name="search" size={22} color={colors.grayDarker} />
            )}
          </SearchButton>
        </SearchInputWrapper>

        {Array.isArray(suggestedCountries) && suggestedCountries?.length > 0 && (
          <SuggestionPopup>
            <SuggestionList
              data={suggestedCountries}
              renderItem={renderSuggestedItems}
              ListEmptyComponent={() => <EmptyList />}
              ItemSeparatorComponent={() => <ItemSeparator />}
              keyExtractor={item => item.alpha3Code}
            />
          </SuggestionPopup>
        )}

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
          <CountriesListSkeleton />
        ) : countries.length === 0 ? (
          <EmptyList />
        ) : (
          <AllCountriesWrapper
            data={countries}
            renderItem={renderCountryRow}
            ListEmptyComponent={() => <EmptyList />}
            ItemSeparatorComponent={() => <ItemSeparator />}
            keyExtractor={item => item.alpha3Code}
          />
        )}
      </Modal>
    </Container>
  );
};

export default Home;
