import React, { Component } from 'react'
import {
  View,
  Text,
  Platform,
  Dimensions
} from 'react-native'
import {
  ScreenContainer,
  Row,
  Column,
  Paragraph
} from '../../components'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/Ionicons'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0
const CONTAINER_HEIGHT = Dimensions.get('window').height - (APPBAR_HEIGHT + STATUSBAR_HEIGHT)

const IconButton = styled.TouchableOpacity`
`
const SaucerList = styled.ScrollView`
  ${props => {
    if (props.padding) {
      return `padding: 0px 10px;`
    }
  }};
`

class OrderReady extends Component {
  render () {
    return (
      <ScreenContainer height={CONTAINER_HEIGHT}>
        <Row width={'90%'} flex={1}>
          <Column flex={1} justifyCenter>
            <Icon style={{textAlign: 'center'}} name='ios-contact' size={45} color='#FF5722' />
          </Column>
          <Column flex={3} justifyCenter>
            <Paragraph size={16}>Andreas Cuevas</Paragraph>
          </Column>
          <Column flex={1} justifyCenter>
            <IconButton>
              <Icon style={{textAlign: 'center'}} name='ios-call' size={30} color='#FF5722' />
            </IconButton>
          </Column>
          <Column flex={1} justifyCenter>
            <IconButton>
              <Icon style={{textAlign: 'center'}} name='ios-chatbubbles' size={30} color='#FF5722' />
            </IconButton>
          </Column>
        </Row>
        <Column borderTop borderColor={'#FF5722'} width={'90%'} flex={4}>
          <Row flex={4}>
            <SaucerList padding>
              <Row flex={1} isSaucer >
                <Column flex={1} justifyCenter>
                  <Paragraph>02</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Tostadas de Pollo</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
              <Row flex={1} isSaucer>
                <Column flex={1} justifyCenter>
                  <Paragraph>05</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Torta de Pierna</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
              <Row flex={1} isSaucer >
                <Column flex={1} justifyCenter>
                  <Paragraph>02</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Tostadas de Pollo</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
              <Row flex={1} isSaucer>
                <Column flex={1} justifyCenter>
                  <Paragraph>05</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Torta de Pierna</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
              <Row flex={1} isSaucer >
                <Column flex={1} justifyCenter>
                  <Paragraph>02</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Tostadas de Pollo</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
              <Row flex={1} isSaucer>
                <Column flex={1} justifyCenter>
                  <Paragraph>05</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Torta de Pierna</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
              <Row flex={1} isSaucer>
                <Column flex={1} justifyCenter>
                  <Paragraph>06</Paragraph>
                </Column>
                <Column flex={3} justifyCenter>
                  <Paragraph size={16}>Torta de Pierna</Paragraph>
                </Column>
                <Column flex={1} justifyCenter>
                  <Paragraph>$100.00</Paragraph>
                </Column>
              </Row>
            </SaucerList>
          </Row>
          <Column padding borderTop borderColor={'#C7C7CC'} flex={1.3}>
            <Row flex={1}>
              <Column justifyCenter flex={1}>
                <Paragraph>Subtotal</Paragraph>
              </Column>
              <Column flexEnd justifyCenter flex={1}>
                <Paragraph>$165.00</Paragraph>
              </Column>
            </Row>
            <Row flex={1}>
              <Column justifyCenter flex={1}>
                <Paragraph color={'#C7C7CC'}>IVA</Paragraph>
              </Column>
              <Column flexEnd justifyCenter flex={1}>
                <Paragraph color={'#C7C7CC'}>$15.00</Paragraph>
              </Column>
            </Row>
          </Column>
          <Column borderTop borderColor={'#FF5722'} flex={1}>
            <Row flex={1}>
              <Column justifyCenter flex={1}>
                <Paragraph color={'#FF5722'} size={16}>TOTAL</Paragraph>
              </Column>
              <Column flexEnd justifyCenter flex={1}>
                <Paragraph>$185.00</Paragraph>
              </Column>
            </Row>
          </Column>
        </Column>
        <Row borderTop borderColor={'#C7C7CC'} width={'90%'} flex={1}>
          <Column flex={1} justifyCenter>
            <Icon style={{textAlign: 'center'}} name='ios-contact' size={45} color='#FF5722' />
          </Column>
          <Column flex={3} justifyCenter>
            <Paragraph size={16}>Jorge Velásquez</Paragraph>
            <Paragraph size={14} color={'#C7C7CC'}>italika Blanca 263VF6</Paragraph>
          </Column>
          <Column flex={1} justifyCenter>
            <IconButton>
              <Icon style={{textAlign: 'center'}} name='ios-call' size={30} color='#FF5722' />
            </IconButton>
          </Column>
          <Column flex={1} justifyCenter>
            <IconButton>
              <Icon style={{textAlign: 'center'}} name='ios-chatbubbles' size={30} color='#FF5722' />
            </IconButton>
          </Column>
        </Row>
        <Row borderTop borderColor={'#C7C7CC'} width={'90%'} flex={1}>
          <Text>Order is Ready</Text>
        </Row>
      </ScreenContainer>
    )
  }
}

export default OrderReady
