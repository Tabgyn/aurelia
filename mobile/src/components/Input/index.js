import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HorizontalLine from '~/components/HorizontalLine';

import { Container, InputLabel, InputBox, TextInput } from './styles';

function Input({ label, icon, color, placeholderColor, ...rest }, ref) {
  return (
    <Container>
      {label && <InputLabel color={color}>{label}</InputLabel>}
      <InputBox>
        {icon && <Icon name={icon} size={20} color={color || '#fff'} />}
        <TextInput
          color={color}
          placeholderColor={placeholderColor}
          {...rest}
          ref={ref}
        />
      </InputBox>
      <HorizontalLine color={color} lineHeight={2} />
    </Container>
  );
}

export default forwardRef(Input);
