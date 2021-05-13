import styled from "styled-components/native";
import colors from "theme/colors";

const headerHeight = 85;
const navbarHeight = 60;
export const Container = styled.View`
  background-color: ${colors.grayLighter};
  border: 1px solid ${colors.grayLight};
  width: 100%;
  height: ${headerHeight}px;
  justify-content: flex-end;
`;

export const Navbar = styled.View`
  height: ${navbarHeight}px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

export const TitleWrapper = styled.View``;

export const BackButtonWrapper = styled.TouchableOpacity`
  width: 35px;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  height: ${navbarHeight}px;
  padding-top: 10px;
`;

export const BackButton = styled.View``;
