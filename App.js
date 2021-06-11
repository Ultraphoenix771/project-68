import React from 'react';
import {createAppContainer}from "react-navigation"
import {createBottomNavigator, createBottomTabNavigator}from "react-navigation-tabs"
import Facebook from './screens/Facebook'
import Something from './screens/something'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
  
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Something:{screen:Something}
})
const AppContainer = createAppContainer(TabNavigator)
