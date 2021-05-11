import React from "react";
import { StyledText, StyledTextProps } from "./style";

interface Props extends StyledTextProps {
  children: string;
}

const Text = ({ children, size, bold, color }: Props) => {
  return (
    <StyledText size={size} color={color} bold={bold}>
      {children}
    </StyledText>
  );
};

export default Text;
