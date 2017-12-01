import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Platform,
  Dimensions
} from 'react-native'
import styled from 'styled-components/native'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0
const CONTAINER_HEIGHT = Dimensions.get('window').height - (APPBAR_HEIGHT + STATUSBAR_HEIGHT)

const ScreenContainer = styled.View`
  width: 100%;
  height: ${props => props.height ? props.height : null};
  background-color: #FFF;
`
const MenuList = styled.FlatList`
  width: 100%;
  padding-top: 10;
`
const Item = styled.View`
  
`
const MenuItemLeft = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
  padding-top: 3px;
  padding-bottom: 3px;
`
const MenuItemRight = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
`
const Row = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
  background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
  flex-direction: row;
  ${props => {
    if (props.alignCenter) {
      return `
        align-items: center;
        justify-content: space-between;`
    }
  }};
`
const Column = styled.View`
  justify-content: ${props => props.justifyCenter ? 'center' : 'flex-start'};
`
const MenuImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border: 2px;
  border-color: #FF5722;
`
const Paragraph = styled.Text`
  font-size: ${props => props.size ? props.size : 14};
  ${props => {
    if (props.color) {
      return `color: ${props.color};`
    }
  }};
`
const SaucerButton = styled.TouchableWithoutFeedback`
  
`
const Wrapper = styled.View`
  width: 90%;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: #C7C7CC;
  margin-bottom: 10px;
  padding-bottom: 10px;
`
const MenuItem = (props) => {
  const {data} = props
  return (
    <SaucerButton onPress={() => console.log('isAvialable')} key={data.id} disabled={!data.available}>
      <Wrapper>
        <MenuItemLeft flex={1}>
          <MenuImage source={{uri: (data.image) ? data.image : 'http://via.placeholder.com/120x120' }} />
        </MenuItemLeft>
        <MenuItemRight flex={2}>
          <Row>
            <Paragraph size={16} color={'#FF5722'}>{data.foodName}</Paragraph>
          </Row>
          <Row flex={4}>
            <Paragraph color={'#919291'}>{data.description}</Paragraph>
          </Row>
          <Row alignCenter>
            <Column justifyCenter>
              <Paragraph>{data.price.toLocaleString('es-MX', {style: 'currency', 'currency': 'MXN'})}</Paragraph>
            </Column>
            <Column>
              <Paragraph color={(data.available) ? '#70BF73' : '#EA4234'}>{(data.available) ? 'Disponible' : 'Agotado'}</Paragraph>
            </Column>
          </Row>
        </MenuItemRight>
      </Wrapper>
    </SaucerButton>
  )
}

class RestaurantMenu extends Component {
  render () {
    return (
      <ScreenContainer height={CONTAINER_HEIGHT}>
        <MenuList
          contentContainerStyle={{alignItems: 'center'}}
          data={[
            {
              id: 0,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: true
            },
            {
              id: 1,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: false
            },
            {
              id: 2,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: true
            },
            {
              id: 3,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: true
            },
            {
              id: 4,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: true
            },
            {
              id: 5,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: true
            },
            {
              id: 6,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: false
            },
            {
              id: 7,
              image: 'http://via.placeholder.com/120x120',
              foodName: 'Tostadas de Pollo',
              description: 'Orden de 3 ricas tostadas con salsa de tomate al gusto',
              price: 50,
              available: false
            }
          ]}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => <MenuItem data={item} />}
        />
      </ScreenContainer>
    )
  }
  _keyExtractor (item, index) {
    return item.id
  }
}

export default RestaurantMenu
