import {
  OrderPreview,
  MainContainer,
  Selector,
  Scroll,
  Content
} from '../../components'
import React ,{Component} from 'react'

class Orders extends Component{
  constructor() {
    super()
  }
  render(){
    return(
      <MainContainer>
        <Content>
          <Selector/>
          <Scroll>
            <OrderPreview/>
            <OrderPreview/>
            <OrderPreview/>
            <OrderPreview/>
            <OrderPreview/>
          </Scroll>
        </Content>
      </MainContainer>
    )
  }
}

export default Orders
