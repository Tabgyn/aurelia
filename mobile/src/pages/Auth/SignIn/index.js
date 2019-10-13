import React, { useRef } from 'react';

import Background from '~/components/Background';

import {
  Container,
  Slogan,
  SloganText,
  SloganLine,
  Form,
  FormInput,
  FormButton,
  RememberBox,
  RememberText,
  RememberButton,
  Footer,
  FooterContent,
  FooterText,
  SignLink,
  SignLinkText,
} from '../styles';
import HorizontalLine from '~/components/HorizontalLine';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Background>
      <Container>
        <Slogan>
          <SloganText>Log In to your account & check your wealth.</SloganText>
          <SloganLine />
        </Slogan>
        <Form>
          <FormInput
            label="email"
            placeholder="john@black.me"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            label="password"
            placeholder="******"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
          <RememberBox>
            <RememberText>Remember me</RememberText>
            <RememberButton />
          </RememberBox>
          <FormButton
            backgroundColor="#fff"
            textColor="#EB992E"
            onPress={handleSubmit}
          >
            Sign in
          </FormButton>
        </Form>
      </Container>
      <Footer>
        <HorizontalLine color="#fff" lineHeight={2} />
        <FooterContent>
          <FooterText>New to this expererience?</FooterText>
          <SignLink onPress={() => navigation.navigate('SignUp')}>
            <SignLinkText>Sign up</SignLinkText>
          </SignLink>
        </FooterContent>
      </Footer>
    </Background>
  );
}
