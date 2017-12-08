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
    this.state = {
      actualSelect :'recients',
      recients:{
          order:{
            status:'hace 01 min',
            number:'#368',
            items:{
              'food1':{
                quantity:'2',
                food:'Tostadas de Pollo',
                details:'Sin cebolla',
              },
              'food2':{
                quantity:'1',
                food:'Milanesa de res',
              },
              'food3':{
                quantity:'2',
                food:'Horchata 500 ml.',
              },
            },
          },
      },
      inProcess:{
        order:{
          status:'En preparacion',
          number:'#368',
          items:{
            'food1':{
              quantity:'2',
              food:'Tostadas de Pollo',
              details:'Sin cebolla',
            },
            'food2':{
              quantity:'1',
              food:'TACOS DE RES',
            },
            'food3':{
              quantity:'2',
              food:'Horchata 500 ml.',
            },
          },
        },
      }
    }
    this.ChangeSelect= this.ChangeSelect.bind(this)
  }
  render(){
    return(
      <MainContainer>
        <Content>
          <Selector change = {this.ChangeSelect} state={this.state.actualSelect}/>
          <Scroll>
            <OrderPreview state = {this.state}/>
            <OrderPreview state = {this.state}/>
            <OrderPreview state = {this.state}/>
            <OrderPreview state = {this.state}/>
            <OrderPreview state = {this.state}/>
          </Scroll>
        </Content>
      </MainContainer>
    )
  }
  ChangeSelect(select){
    let state = this.state
    state.actualSelect = select
    this.setState(state)
  }
}

export default Orders
