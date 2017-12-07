import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const IconEdit = (props) => (
  <Icon
    name = {props.name}
    size = {25}
    color = {props.color}
  />
)

export default IconEdit
