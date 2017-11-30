import {StackNavigator} from 'react-navigation'
import React,{Component} from 'react'
import Example from '../containers/example'


export const AppStack = StackNavigator({
  Example: {
    screen: Example,
  },
});
