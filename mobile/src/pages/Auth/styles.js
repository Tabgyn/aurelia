import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Slogan = styled.View`
  justify-content: flex-start;
`;

export const SloganText = styled.Text`
  font-size: 30px;
  color: #fff;
`;

export const SloganLine = styled.View`
  margin-top: 10px;
  width: 34px;
  height: 6px;
  background-color: #fff;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 130px;
`;

export const FormInput = styled(Input)``;

export const FormButton = styled(Button)`
  margin-top: 5px;
`;

export const RememberBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const RememberText = styled.Text`
  font-size: 14px;
  color: #fff;
`;
export const RememberButton = styled.Switch.attrs({
  ios_backgroundColor: 'rgba(255, 255, 255, 0.5)',
})``;

export const Footer = styled.View`
  padding: 0 30px 50px;
`;

export const FooterContent = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: center;
`;

export const FooterText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
`;

export const SignLink = styled.TouchableOpacity`
  padding-bottom: 2px;
  border-bottom-width: 2px;
  border-bottom-color: rgba(255, 255, 255, 0.5);
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
