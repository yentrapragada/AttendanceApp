import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './app/components/Login';
import ProfileScreen from './app/components/Profile';

const LoginStack = createStackNavigator({
    Home:LoginScreen,
    Profile:ProfileScreen,
  });
  
const App=createAppContainer(LoginStack);
export default  App;


