import React from 'react';
import { View, Text } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
    </View>
  );
}

const styles = {
  container: {
    flex: 1, 
    marginLeft: 18, 
    marginRight: 10, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text: {
    color: 'red'
  }
}
