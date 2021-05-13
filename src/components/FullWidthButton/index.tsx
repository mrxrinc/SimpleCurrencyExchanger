import React, { FC } from "react";
import { ActivityIndicator } from "react-native";
import { Icon, Text, colors } from "theme";
import { Container, LoadingWrapper, TitleStyle } from "./style";

interface FullWidthButtonProps {
  icon?: string;
  color?: string;
  title: string;
  onPress: () => void;
  inverse?: boolean;
  customStyle?: string;
  loading?: boolean;
}

const FullWidthButton: FC<FullWidthButtonProps> = ({
  icon,
  color,
  title,
  onPress,
  inverse,
  customStyle,
  loading,
}) => {
  return (
    <Container
      onPress={onPress}
      color={color}
      customStyle={customStyle}
      disabled={loading}>
      {loading ? (
        <LoadingWrapper>
          <ActivityIndicator
            size="large"
            color={inverse ? color : colors.white}
          />
        </LoadingWrapper>
      ) : (
        <>
          {!!icon && (
            <Icon
              name={icon}
              size={25}
              color={inverse ? color : colors.white}
            />
          )}
          <Text
            color={inverse ? color : colors.white}
            size={18}
            bold
            customStyle={TitleStyle}>
            {title}
          </Text>
        </>
      )}
    </Container>
  );
};

export default FullWidthButton;
