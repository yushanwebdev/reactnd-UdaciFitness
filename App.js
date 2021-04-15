import React from 'react';
import { View, Text } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import styled from 'styled-components/native';

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #333;
`;

const WelcomeText = styled.Text`
  color: white;
  font-size: 20px;
`

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

export default function App() {
  return (
    <CenterView>
      <WelcomeText>Hello</WelcomeText>
      <WelcomeBtn onPress={() => alert('Hello')}>
        <WelcomeText>Push Me</WelcomeText>
      </WelcomeBtn>
    </CenterView>
  );
}
