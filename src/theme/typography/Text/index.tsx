import React from "react";
import { StyledText, StyledTextProps } from "./style";

interface Props extends StyledTextProps {
  children: string | [string, JSX.Element];
  numberOfLines?: number;
}

const Text = ({
  children,
  size,
  bold,
  color,
  customStyle,
  numberOfLines,
}: Props) => {
  return (
    <StyledText
      size={size}
      color={color}
      bold={bold}
      customStyle={customStyle}
      numberOfLines={numberOfLines}>
      {children}
    </StyledText>
  );
};

export default Text;
