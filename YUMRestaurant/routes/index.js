import {StackNavigator} from 'react-navigation'
import React, {Component} from 'react'
import Example from '../containers/example'
import {RestaurantMenu} from '../containers'

export const AppStack = StackNavigator({
  Prueba: {
    screen: RestaurantMenu
  }
})
