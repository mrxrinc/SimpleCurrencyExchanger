import styled from "styled-components/native";
import { colors } from "theme";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const TopSection = styled.View`
  flex: 1;
  padding: 25px 20px 0;
`;

export const FlagWrapper = styled.View`
  width: 150px;
  height: 95px;
  border-radius: 7px;
  background-color: ${colors.white};
  overflow: hidden;
  align-self: center;
  elevation: 25;
  box-shadow: 0px 10px 25px #00000011;
`;

export const TitleWrapper = styled.View`
  padding-top: 15px;
  align-items: center;
`;

export const DetailWrapper = styled.View`
  padding-top: 10px;
`;

export const DetailItem = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
`;

export const IconWrapper = styled.View<{ bottomSpace: number }>`
  width: 40px;
  margin-bottom: ${props => props.bottomSpace + "px"};
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  max-height: 100px;
  justify-content: center;
  align-items: center;
`;

export const ExchangeButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  width: 190px;
  height: 48px;
  border-radius: 24px;
  elevation: 10;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.ScrollView`
  flex: 1;
  padding: 0 20px;
`;

export const ModalTitle = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 0;
`;

export const ModalResultWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  align-self: center;
`;

export const ModalCurrencyWrapper = styled.View`
  position: absolute;
  right: -20px;
  bottom: 7px;
`;

export const ModalButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  max-height: 60px;
  position: absolute;
  bottom: 0;
`;
