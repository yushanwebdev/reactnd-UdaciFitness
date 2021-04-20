import React, { Component } from 'react';
import { Platform, View, StatusBar, Animated, StyleSheet, Image } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import reducer from './reducers';
import { purple, white } from './utils/colors';
import History from './components/History';
import AddEntry from './components/AddEntry';
import EntryDetail from './components/EntryDetail';
import Title from './components/Title';
import Live from './components/Live';

// decay - initial velocity and  slow to a stop
// spring - spring physics model
// timing - animated a value over time

export default class App extends Component {
  state = {
    opacity: new Animated.Value(0),
    scale: new Animated.Value(0),
  }

  componentDidMount() {
    const { opacity, scale } = this.state;

    Animated.timing(opacity, { toValue: 1, duration: 1000, useNativeDriver: true }).start();
    Animated.spring(scale, { toValue: 1, speed: 5, useNativeDriver: true}).start();
  }

  render() {
    const { opacity, scale } = this.state;

    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, { 
            opacity,
            transform: [
              { scale: scale },
            ]}]}
          source={{ uri: 'https://iconape.com/wp-content/png_logo_vector/marvels-agents-of-s-h-i-e-l-d.png' }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  img: {
    width: 300,
    height: 300
  }
})
