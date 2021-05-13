import styled from "styled-components/native";
import { colors } from "theme";

export const ModalStyles = {
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: "hidden",
  },
  wrapper: {
    backgroundColor: `${colors.primaryDeepDark}44`,
  },
};

export const Header = styled.View`
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
`;

export const IconWrapper = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;

export const TitleWrapper = styled.View`
  padding-top: 5px;
`;
