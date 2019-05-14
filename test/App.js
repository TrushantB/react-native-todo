import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Splash from './splash';
import Home from './home';
const MainNavigator = createStackNavigator({
  Splashscreen: {screen: Splash},
  Homescreen: {screen: Home},
});

const App = createAppContainer(MainNavigator);

export default App;

