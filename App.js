import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import InstagramScreen from './screens/InstagramScreen'
import FacebookScreen from './screens/FacebookScreen'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  
  render(){
    
    return (
    <AppContainer/>
    )
  
  }
  
}

const TabNavigator=createBottomTabNavigator({
  Facebook:{screen: FacebookScreen},
  Instagram: {screen: InstagramScreen}
})

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
