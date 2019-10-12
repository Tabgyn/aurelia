import React from 'react';

import HorizontalLine from '../HorizontalLine';

import { Container, Text } from './styles';

export default function Footer({ children }) {
  return (
    <Container>
      <HorizontalLine color="#fff" lineHeight={2} />
      <Text>{children}</Text>
    </Container>
  );
}
