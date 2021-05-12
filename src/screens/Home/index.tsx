import React, { FC, useState } from "react";
import { colors, Text, Icon } from "theme";
import Image from "react-native-remote-svg";
import Header from "components/Header";
import Modal from "components/Modal";
import { COUNTRIES } from "utils/mockData";
import { CountryType } from "types/country";
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
  code: string;
}

const Home: FC = () => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [showCountriesModal, setShowCountriesModal] = useState<boolean>(true);

  const fetchCountry = ({ keyword }: FetchCountry) => {
    console.log(keyword);
  };

  const renderCountryRow = ({ item }: { item: CountryType }) => {
    return (
      <CountryNameRowContainer onPress={() => {}}>
        <CountryFlagWrapper>
          <Image
            source={{ uri: `${item?.flag}` }}
            style={FlagStyle}
            resizeMode="cover"
          />
        </CountryFlagWrapper>
        <Text numberOfLines={1}>{item?.name}</Text>
      </CountryNameRowContainer>
    );
  };

  const renderItemSeparator = () => {
    return <ItemSeparator />;
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
        title="All Countries">
        <AllCountriesWrapper
          data={COUNTRIES}
          renderItem={renderCountryRow}
          ItemSeparatorComponent={renderItemSeparator}
          keyExtractor={item => item.alpha3Code}
        />
      </Modal>
    </Container>
  );
};

export default Home;

// renderItem={({ item }) => {
//   renderCountryRow({
//     name: item.name,
//     flag: item.flag,
//     code: item.alpha3Code,
//   });
// }}
