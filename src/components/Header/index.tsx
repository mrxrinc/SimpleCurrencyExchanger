import { useNavigation } from "@react-navigation/native";
import React, { FC, ReactNode } from "react";
import { Text, Icon, colors } from "theme";
import {
  Container,
  Navbar,
  TitleWrapper,
  BackButtonWrapper,
  BackButton,
} from "./style";

interface Props {
  title?: string;
  hasBackButton?: boolean;
  children?: ReactNode;
}

const Header: FC<Props> = ({ children, title, hasBackButton }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Navbar>
        {!!children ? (
          children
        ) : (
          <>
            <TitleWrapper>
              <Text size={20}>{title || "Anyfin"}</Text>
            </TitleWrapper>
            {hasBackButton && (
              <BackButtonWrapper
                onPress={() => navigation.goBack()}
                activeOpacity={0.1}>
                <BackButton>
                  <Icon name="back" size={23} color={colors.text} />
                </BackButton>
              </BackButtonWrapper>
            )}
          </>
        )}
      </Navbar>
    </Container>
  );
};
export default Header;
