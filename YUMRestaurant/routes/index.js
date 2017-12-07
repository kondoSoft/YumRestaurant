import {StackNavigator} from 'react-navigation'
import React, {Component} from 'react'
import Example from '../containers/example'
import {Orders} from '../containers'

export const AppStack = StackNavigator({
    Orders: {
    screen: Orders,
  }
})
