import React from "react";
import { StyledText, StyledTextProps } from "./style";

interface Props extends StyledTextProps {
  children?: string | [string, JSX.Element];
  numberOfLines?: number;
}

const Text = ({
  children,
  size,
  bold,
  color,
  customStyle,
  numberOfLines,
  ...rest
}: Props) => {
  return (
    <StyledText
      size={size}
      color={color}
      bold={bold}
      customStyle={customStyle}
      numberOfLines={numberOfLines}
      {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
