import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { colors } from "theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.grayLight} />
    </Container>
  );
};

export default Loading;
