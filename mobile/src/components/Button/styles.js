import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled(RectButton)`
  height: 46px;
  width: 100%;
  background: ${props => props.backgroundColor || '#fff'};
  border-radius: 8px;
  justify-content: center;
`;

export const WithIcon = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(Icon)`
  margin-right: 10px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.color || '#000'};
  font-weight: bold;
  font-size: 14px;
`;
