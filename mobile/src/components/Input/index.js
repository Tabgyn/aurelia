import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HorizontalLine from '~/components/HorizontalLine';

import { Container, InputLabel, InputBox, TextInput } from './styles';

export default function Input({
  label,
  icon,
  color,
  placeholderColor,
  ...rest
}) {
  return (
    <Container>
      {label && <InputLabel color={color}>{label}</InputLabel>}
      <InputBox>
        {icon && <Icon name={icon} size={20} color={color || '#fff'} />}
        <TextInput
          {...rest}
          color={color}
          placeholderColor={placeholderColor}
        />
      </InputBox>
      <HorizontalLine color={color} lineHeight={2} />
    </Container>
  );
}
