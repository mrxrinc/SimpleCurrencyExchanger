import React from "react";
import styled from "styled-components/native";
import { Text } from "theme";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const EmptyList = () => {
  return (
    <Container>
      <Text>The List is Empty!</Text>
    </Container>
  );
};

export default EmptyList;
