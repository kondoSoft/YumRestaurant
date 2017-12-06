import React, {Component} from 'react'
import {
  OrderPreview,
  MainContainer,
  Selector,
} from '../../components'
class Prueba extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <MainContainer>
        <Selector/>
        <OrderPreview/>
      </MainContainer>
    )
  }
}
export default Prueba
