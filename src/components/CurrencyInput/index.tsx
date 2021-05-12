import React, { FC, useState, useEffect } from "react";
import Image from "react-native-remote-svg";
import { Text } from "theme";
import { Container, CurrencyWrapper, TextInput, FlagStyle } from "./style";

interface CurrencyInputProps {
  handleAmount: (T: string) => void;
}

const CurrencyInput: FC<CurrencyInputProps> = ({ handleAmount }) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>("");

  useEffect(() => {
    handleAmount(amount);
  }, [amount]);

  return (
    <Container focused={onFocus}>
      <TextInput
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        keyboardType="number-pad"
        returnKeyType="done"
        spellCheck={false}
        onChangeText={(value: string) => setAmount(value.replace(/[^\d]/g, ""))}
        value={amount}
      />
      <CurrencyWrapper>
        <Image source={require("assets/images/swe.svg")} style={FlagStyle} />
        <Text>SEK</Text>
      </CurrencyWrapper>
    </Container>
  );
};

export default CurrencyInput;
