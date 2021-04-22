import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';


export default class App extends React.Component {
  render() {
    return(
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    backgroundColor: 'black',
  }
})