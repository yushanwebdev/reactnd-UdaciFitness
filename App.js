import React from 'react';
import { Platform, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import reducer from './reducers';
import { purple, white } from './utils/colors';
import History from './components/History';
import AddEntry from './components/AddEntry';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <View style={{ flex: 1 }}>
          <View style={{ height: 20 }} />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color }) => {
                if (route.name === 'History') {
                  return <Ionicons name='ios-bookmarks' size={30} color={color} />
                } else if (route.name === 'AddEntry') {
                  return <FontAwesome name='plus-square' size={30} color={color} />
                }
              },
            })}
            tabBarOptions={{
              activeTintColor: Platform.OS === 'ios' ? purple : white,
              style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
              }
            }}>
            <Tab.Screen 
              name="History" 
              component={History} 
              options={{ headerShown: false }} />
            <Tab.Screen 
              name="AddEntry" 
              component={AddEntry} 
              options={{ headerShown: false }} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </Provider>
  );
}
