import React from "react";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
import styled from "styled-components/native";
import AppContainer from "navigation";

export const RootContainer = styled.View`
  flex: 1;
`;

const Root = () => {
  return (
    <RootContainer>
      <>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <AppContainer />
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    </RootContainer>
  );
};

export default Root;
