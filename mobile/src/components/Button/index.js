import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, WithIcon, ButtonIcon, ButtonText } from './styles';

export default function Button({
  icon,
  children,
  loading,
  textColor,
  ...rest
}) {
  const innerContent = icon ? (
    <WithIcon>
      <ButtonIcon name={icon} size={20} color={textColor} />
      <ButtonText color={textColor}>{children}</ButtonText>
    </WithIcon>
  ) : (
    <ButtonText color={textColor}>{children}</ButtonText>
  );

  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        innerContent
      )}
    </Container>
  );
}
