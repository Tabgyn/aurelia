import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export default styled.View`
  /* flex: 1; */
  height: ${props => props.lineHeight || StyleSheet.hairlineWidth}px;
  background-color: ${props => props.color || '#fff'};
`;
