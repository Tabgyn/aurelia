import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 46px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
  text-transform: uppercase;
`;

export const InputBox = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: props =>
    props.placeholderColor || 'rgba(255, 255, 255, 0.5)',
})`
  flex: 1;
  font-size: 14px;
  margin-left: 10px;
  color: ${props => props.color || '#fff'};
`;
