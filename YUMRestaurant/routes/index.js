import {StackNavigator} from 'react-navigation'
import React, {Component} from 'react'
import Example from '../containers/example'
import {Prueba} from '../containers'

export const AppStack = StackNavigator({
  Prueba: {
    screen: Prueba
  }
})
