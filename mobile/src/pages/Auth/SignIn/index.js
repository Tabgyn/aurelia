import React from 'react';

import Background from '~/components/Background';
import Input from '~/components/Input';
import Button from '~/components/Button';

import { Container } from '../styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Input
          label="email"
          placeholder="john@black.me"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <Button backgroundColor="#fff" textColor="#EB992E" icon="email">
          Login
        </Button>
      </Container>
    </Background>
  );
}
