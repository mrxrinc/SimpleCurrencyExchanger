import React from "react";
import { StatusBar } from "react-native";
import Toast from "react-native-toast-message";
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
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    </RootContainer>
  );
};

export default Root;
