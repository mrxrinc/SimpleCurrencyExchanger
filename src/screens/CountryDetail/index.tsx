import React, { FC, useState, useEffect } from "react";
import { colors, Text, Icon } from "theme";
import Header from "components/Header";
import Image from "react-native-remote-svg";
import Modal from "components/Modal";
import FullWidthButton from "components/FullWidthButton";
import CurrencyInput from "components/CurrencyInput";
import { getCountryByName } from "utils/apiHelper";
import { CountryDetailProps } from "navigation/RootStack";
import { CountryType } from "types/country";
import {
  Container,
  Content,
  ModalContentWrapper,
  TopSection,
  FlagWrapper,
  TitleWrapper,
  DetailWrapper,
  DetailItem,
  IconWrapper,
  ButtonWrapper,
  ExchangeButton,
  ModalTitle,
  ModalResultWrapper,
  ModalCurrencyWrapper,
  ModalButtonWrapper,
} from "./styles";

interface FetchCountry {
  keyword?: string;
}

const CountryDetail: FC<CountryDetailProps> = ({ route }) => {
  const { fullName } = route.params;
  const [showExchangeModal, setShowExchangeModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<CountryType | null>(null);
  const [amount, setAmount] = useState<string>("");
  const currencyCode = country?.currencies
    ? country.currencies[0]["code"]
    : "--";

  useEffect(() => {
    getCountryByName({ fullName, setIsLoading, setCountry });
  }, []);

  const handleExchange = () => {
    console.log(amount);
  };

  console.log({ fullName });
  console.log(country);

  return (
    <Container>
      <Header hasBackButton />
      <Content>
        <TopSection>
          <FlagWrapper>
            <Image
              source={{ uri: country?.flag }}
              style={{ width: 150, height: 95 }}
            />
          </FlagWrapper>
          <TitleWrapper>
            <Text size={22}>{country?.name || "--"}</Text>
            <Text
              size={14}
              color={colors.grayDark}
              customStyle={"marginTop: 4px"}>
              {country?.nativeName}
            </Text>
          </TitleWrapper>

          <DetailWrapper>
            <DetailItem>
              <IconWrapper bottomSpace={7}>
                <Icon name="capital" size={25} color={colors.grayDarker} />
              </IconWrapper>
              <Text>{country?.capital || "--"}</Text>
            </DetailItem>
            <DetailItem>
              <IconWrapper bottomSpace={-4}>
                <Icon name="population" size={25} color={colors.grayDarker} />
              </IconWrapper>
              <Text>
                {country?.population
                  ? country?.population.toLocaleString() + "  "
                  : "--  "}
                <Text size={12} color={colors.grayDarker}>
                  people
                </Text>
              </Text>
            </DetailItem>
            <DetailItem>
              <IconWrapper bottomSpace={5}>
                <Icon name="currency" size={25} color={colors.grayDarker} />
              </IconWrapper>
              <Text>{currencyCode}</Text>
            </DetailItem>
          </DetailWrapper>
        </TopSection>
        <ButtonWrapper>
          <ExchangeButton
            onPress={() => setShowExchangeModal(true)}
            activeOpacity={0.6}
            disabled={!currencyCode}>
            <Text size={18} color={colors.white} bold>
              SEK
            </Text>
            <IconWrapper bottomSpace={3}>
              <Icon name="arrow" size={20} color={colors.white} />
            </IconWrapper>
            <Text size={18} color={colors.white} bold>
              {currencyCode}
            </Text>
          </ExchangeButton>
        </ButtonWrapper>
      </Content>

      <Modal showModal={showExchangeModal} setShowModal={setShowExchangeModal}>
        <ModalContentWrapper>
          <ModalTitle>
            <Text size={22} color={colors.text} bold>
              Convert SEK to USD
            </Text>
          </ModalTitle>
          <ModalResultWrapper>
            <Text size={40} color={colors.secondary} bold>
              2,450.87
            </Text>
            <ModalCurrencyWrapper>
              <Text size={16} color={colors.secondary} bold>
                USD
              </Text>
            </ModalCurrencyWrapper>
          </ModalResultWrapper>
          <CurrencyInput handleAmount={(value: string) => setAmount(value)} />
        </ModalContentWrapper>
        <ModalButtonWrapper>
          <FullWidthButton
            title="Convert"
            icon="convert"
            loading={isLoading}
            onPress={handleExchange}
          />
        </ModalButtonWrapper>
      </Modal>
    </Container>
  );
};

export default CountryDetail;
