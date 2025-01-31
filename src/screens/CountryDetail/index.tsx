import React, { FC, useState, useEffect } from "react";
import { colors, Text, Icon } from "theme";
import Header from "components/Header";
import Image from "react-native-remote-svg";
import Modal from "components/Modal";
import FullWidthButton from "components/FullWidthButton";
import CurrencyInput from "components/CurrencyInput";
import { getCountryByName, getExchangeResult } from "utils/apiHelper";
import { formatNumber } from "utils/common";
import { CountryDetailProps } from "navigation/RootStack";
import { CountryType } from "types/country";
import SkeletonLoader from "components/Skeleton/CountryDetail";
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
  RateWrapper,
} from "./styles";

const CountryDetail: FC<CountryDetailProps> = ({ route }) => {
  const { name } = route.params;
  const [showExchangeModal, setShowExchangeModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [country, setCountry] = useState<CountryType | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [result, setResult] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const currencyCode: string = country?.currencies
    ? country.currencies[0]["code"]
    : "--";

  useEffect(() => {
    getCountryByName({ name, setIsLoading, setCountry, fullName: true });
  }, []);

  const handleExchange = () => {
    getExchangeResult({
      from: "SEK",
      to: currencyCode,
      amount: parseInt(amount),
      setIsLoading,
      setResult,
      setRate,
    });
  };

  return (
    <Container>
      <Header hasBackButton />
      {isLoading ? (
        <SkeletonLoader />
      ) : (
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
                    ? formatNumber(country.population) + "  "
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
      )}

      <Modal showModal={showExchangeModal} setShowModal={setShowExchangeModal}>
        <ModalContentWrapper>
          <ModalTitle>
            <Text size={22} color={colors.text} bold>
              {`Convert SEK to ${currencyCode}`}
            </Text>
          </ModalTitle>
          <ModalResultWrapper>
            <Text size={40} color={colors.secondary} bold>
              {`${result ? formatNumber(result.toFixed(2)) : 0}`}
            </Text>
            <ModalCurrencyWrapper>
              <Text size={16} color={colors.secondary} bold>
                {currencyCode}
              </Text>
            </ModalCurrencyWrapper>
          </ModalResultWrapper>
          <CurrencyInput handleAmount={(value: string) => setAmount(value)} />
          <RateWrapper>
            <Text color={colors.grayDarker}>{`rate: ${
              rate ? rate.toFixed(4) : 0
            }`}</Text>
          </RateWrapper>
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
