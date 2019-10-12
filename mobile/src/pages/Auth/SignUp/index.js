import React from 'react';
import { CheckBox } from 'react-native-elements';

import Background from '~/components/Background';

import {
  Container,
  Slogan,
  SloganText,
  SloganLine,
  Form,
  FormInput,
  FormButton,
  Footer,
  FooterContent,
  FooterText,
  SignLink,
  SignLinkText,
} from '../styles';
import HorizontalLine from '~/components/HorizontalLine';

export default function SignUp() {
  return (
    <Background>
      <Container>
        <Slogan>
          <SloganText>Great men always kept records of their coin.</SloganText>
          <SloganLine />
        </Slogan>
        <Form>
          <FormInput
            label="username"
            placeholder="kingjohnny"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <FormInput
            label="email"
            placeholder="john@black.me"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <FormInput label="password" placeholder="******" secureTextEntry />
          <FormInput
            label="confirm password"
            placeholder="******"
            secureTextEntry
          />
          <CheckBox
            title="I Accept Term & Conditions"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            containerStyle={{
              backgroundColor: 'transparent',
              borderWidth: 0,
              padding: 0,
              marginBottom: 20,
            }}
            textStyle={{
              color: '#fff',
              fontSize: 14,
            }}
            uncheckedColor="#fff"
          />
          <FormButton backgroundColor="#fff" textColor="#EB992E">
            Sign up
          </FormButton>
        </Form>
      </Container>
      <Footer>
        <HorizontalLine color="#fff" lineHeight={2} />
        <FooterContent>
          <FooterText>Already signed?</FooterText>
          <SignLink>
            <SignLinkText>Sign in</SignLinkText>
          </SignLink>
        </FooterContent>
      </Footer>
    </Background>
  );
}
