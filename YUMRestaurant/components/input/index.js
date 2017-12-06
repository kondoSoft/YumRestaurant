import React, { Component } from 'react'
import styled from 'styled-components/native'
import {
  Animated,
  Text
} from 'react-native'
import PropTypes from 'prop-types';

const Container = styled.View`
  width: 100%;
  height: ${props => props.height}px;
`
const TextInput = styled.TextInput`
  border-bottom-width: 2px;
  border-color: ${props => props.borderColor && props.borderColor};
`
const Counter = styled.Text`
  font-size: 10px;
  color: #C7C7CC;
  text-align: right;
`
const config = {
  friction: 40,
  tension: 40
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput)

class Input extends Component {
  static defaultProps = {
    label: 'Label',
    maxLength: false,
    keyboardType: 'default',
    onBlur: () => {},
    onChange: () => {},
    onChangeText: () => {},
    onFocus: () => {},
    autoCapitalize: 'none',
    secureTextEntry: false
  }
  constructor (props) {
    super(props)

    this.height = 50
    this.subHeight = (this.height / 2)

    this.state = {
      offsetY: new Animated.Value((this.subHeight)),
      fontSize: new Animated.Value(14),
      borderColor: '#C7C7CC',
      color: '#C7C7CC',
      value: '',
      editable: true
    }
    this._animateInput = this._animateInput.bind(this)
    this._isEmptyCloseInput = this._isEmptyCloseInput.bind(this)
    this.Input
  }
  _animateInput () {
    this.setState({
      borderColor: '#FF5722',
      color: '#FF5722',
      editable: true
    }, () => {
      this.Input._component.root.focus()
    })
    Animated.spring(this.state.offsetY, {
      toValue: 0,
      ...config
      // useNativeDriver: true
    }).start()

    Animated.spring(this.state.fontSize, {
      toValue: 10,
      ...config
    }).start()
  }
  _isEmptyCloseInput (e) {
    if (e.nativeEvent.text === '') {
      Animated.timing(this.state.offsetY, {
        toValue: (this.subHeight),
        duration: 250
        // ...config
        // useNativeDriver: true
      }).start()

      Animated.timing(this.state.fontSize, {
        toValue: 14,
        duration: 250
        // ...config
      }).start()

      this.setState({
        borderColor: '#C7C7CC',
        color: '#C7C7CC',
        editable: false
      })
    }
  }
  render () {
    const { borderColor, fontSize, color, offsetY, value, editable } = this.state
    const { label, maxLength } = this.props
    const textSize = fontSize.interpolate({
      inputRange: [0, (this.subHeight)],
      outputRange: [10, 14]
    })
    const paddingTop = fontSize.interpolate({
      inputRange: [0, (this.subHeight)],
      outputRange: [7, 0]
    })
    return (
      <Container height={ this.height } style={this.props.style}>
        <Animated.Text
          onPress={ () => this._animateInput() }
          style={{
            paddingTop,
            transform: [{translateY: offsetY}],
            zIndex: 2,
            height: this.subHeight,
            fontSize,
            color
          }}>{ (label) ? label : 'Label' }</Animated.Text>
        <AnimatedTextInput 
          underlineColorAndroid={ 'transparent' }
          secureTextEntry={ this.props.secureTextEntry }
          onFocus={ this.props.onFocus }
          onChange={ this.props.onChange }
          onChangeText={ (text) => { 
            this.setState({
              value: text
            })
            this.props.onChangeText(text)
          } }
          editable={ editable }
          style={{ paddingBottom: 2, fontSize: 18 }}
          borderColor={ borderColor }
          onBlur={ (e) => {
            this._isEmptyCloseInput(e)
            this.props.onBlur()
          } }
          ref={ ref => this.Input = ref }
        />
        { maxLength ? <Counter>{ (300 - value.length) }</Counter> : null }
      </Container>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  keyboardType: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  onChnageText: PropTypes.func,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool
}

export default Input
