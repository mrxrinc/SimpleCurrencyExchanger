import React from "react";
import styled from "styled-components/native";
import { colors, Text } from "theme";

const Container = styled.View`
  flex: 1;
  min-height: 200px;
  justify-content: center;
  align-items: center;
`;

const EmptyList = () => {
  return (
    <Container>
      <Text color={colors.grayDark}>The List is Empty!</Text>
    </Container>
  );
};

export default EmptyList;
