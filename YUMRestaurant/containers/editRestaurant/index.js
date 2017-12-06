import React, { Component } from 'react'
import {
  View,
  Text,
  Animated,
  TextInput,
  Easing
} from 'react-native'
import {
  Row,
  Column,
  Input
} from '../../components'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

export const ScrollContainer = styled.ScrollView`
  background-color: #FFF;
`

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

class EditRestaurant extends Component {
  constructor (props) {
    super(props)

    this.state = {
      borderColor: '#C7C7CC',
      offsetY: new Animated.Value(30)
    }
    this._animateInput = this._animateInput.bind(this)
    // this.Input
  }
  _animateInput () {
    Animated.timing(this.state.offsetY, {
      toValue: 0,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true
    }).start()

    this.Input.focus()
    this.setState({
      borderColor: '#FF5722'
    })
  }
  _isEmptyCloseInput (e) {
    if (e.nativeEvent.text === '') {
      Animated.timing(this.state.offsetY, {
        toValue: 30,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true
      }).start()

      this.setState({
        borderColor: '#C7C7CC'
      })
    }
  }
  render () {
    const { borderColor } = this.state
    return (
      <ScrollContainer contentContainerStyle={{alignItems: 'center', flex: 1}}>
        <Row alignCenterJustify>
          <Text>Image Picker</Text>
        </Row>
        <Row width={'90%'}>
          <Column flex={1}>
            <Input
              label={'Nombre'}
            />
            <Input
              label={'Apellido'}
            />
            <Input
              label={'Dirección'}
            />
          </Column>
        </Row>
        <Row>
          <Text>Form 2</Text>
        </Row>
        <Row alignCenterJustify flex={0.7}>
          <Text>Social Network</Text>
        </Row>
      </ScrollContainer>
    )
  }
}

export default EditRestaurant
