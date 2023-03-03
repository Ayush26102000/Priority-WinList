import React from 'react';

// Stack Navigator 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// importing core components
import { StyleSheet, Text, View } from 'react-native';

// Importing Screens to stack in navigator
import Home from './Screens/Home';

// Created stack navigator
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
