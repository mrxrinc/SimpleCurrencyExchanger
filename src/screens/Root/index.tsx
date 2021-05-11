import React from "react";
import { StatusBar } from "react-native";
import AppContainer from "navigation";
import { RootContainer } from "./style";

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
      </>
    </RootContainer>
  );
};

export default Root;
