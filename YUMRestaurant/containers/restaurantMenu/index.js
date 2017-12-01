import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  Platform,
  Dimensions
} from 'react-native'
import {
  ScreenContainer,
  MenuList,
  Item,
  MenuItemLeft,
  MenuItemRight,
  Row,
  Column,
  MenuImage,
  Paragraph,
  SaucerButton,
  Wrapper
} from '../../components'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0
const CONTAINER_HEIGHT = Dimensions.get('window').height - (APPBAR_HEIGHT + STATUSBAR_HEIGHT)

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
