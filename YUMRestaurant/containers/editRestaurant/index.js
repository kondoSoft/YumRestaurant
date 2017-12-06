import React, { Component } from 'react'
import {
  View,
  Text
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

class EditRestaurant extends Component {
  // isMounted () {
  //   new Promise((resolve, reject) => {
  //     this.setState({
  //       left: -SCREEN_WIDTH,
  //       bottom: -SCREEN_HEIGHT
  //     }, () => {
  //       setTimeout(() => resolve(true), 500)
  //     })
  //   })
  //   .then(isMounted => {
  //     if (isMounted) {
  //       this.setState({
  //         flex: 2,
  //         zIndex: 4,
  //         position: 'absolute',
  //         height: '100%'
  //       })
  //     }
  //   })
  // }
  // isUnMounted () {
  //   new Promise((resolve, reject) => {
  //     this.setState({
  //       flex: 1,
  //       zIndex: 0,
  //       position: 'relative',
  //       height: '0%'
  //     }, () => {
  //       setTimeout(() => {
  //         resolve(true)
  //       }, 500)
  //     })
  //   })
  //   .then(isUnMounted => {
  //     if (isUnMounted) {
  //       this.setState({
  //         left: 0,
  //         bottom: 0
  //       })
  //     }
  //   })
  // }
  // componentWillUpdate () {
  //   UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)
  //   var CustomLayoutSpring = {
  //     duration: 1000,
  //     create: {
  //       type: LayoutAnimation.Types.spring,
  //       springDamping: 1
  //     },
  //     update: {
  //       type: LayoutAnimation.Types.spring,
  //       springDamping: 1
  //     }
  //   }
  //   LayoutAnimation.configureNext(CustomLayoutSpring)
  //   // LayoutAnimation.spring()
  // }
  render () {
    return (
      <ScrollContainer contentContainerStyle={{alignItems: 'center', flex: 1}}>
        <Row alignCenterJustify flex={1}>
          <Text>Restart LayoutAnimation</Text>
        </Row>
        <Row width={'90%'} flex={1}>
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
        <Column>
          <Text>Change Form</Text>
        </Column>
        <Row alignCenterJustify flex={0.7}>
          <Text>Change Flex state</Text>
        </Row>
      </ScrollContainer>
    )
  }
}

export default EditRestaurant
