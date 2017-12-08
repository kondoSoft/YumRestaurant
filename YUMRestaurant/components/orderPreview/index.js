import styled from 'styled-components/native'
import React,{Component} from 'react'
import {IconEdit} from '../index'

const MainContainer = styled.View`
  flex:1;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: #c7c7cc;
  margin: 10px 0 10px 0;
`
const LeftContainer = styled.View`
  flex: 2;
  justify-content: flex-start;
`
const RightContainer = styled.View`
  flex: 1;
  align-items: center;
`
const CenterContainer = styled.View`
  flex: 3;
  align-items: flex-start;
`
const OrangeText = styled.Text`
  font-size: 25px;
  color: #FF5722;
`
const GrayText =  styled.Text`
  font-size: 15px;
  color: #C7C7CC;
  margin-left:  ${props => props.margin ? '15px' : '0'};
`
const RawText = styled.Text`
  font-size: 15px;
`
const OrderContainer = styled.View`
  flex: 1;
  padding: 0 10px 0 10px;
  margin: 5px 0 5px 0;
`
const StatusContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  padding: 0 10px 0 10px;

`
const TopContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const BottomContent = styled.View`
  flex: 1;
  align-items: flex-start;
`
const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`
var Icon = ''
class OrderPreview extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.ChangeState =  this.ChangeState.bind(this)

  }

  render(){
    this.ChangeState()
    return(
      <MainContainer>
        <LeftContainer>
          <TopContent>
            <IconEdit
              name = {Icon}
              color = '#F7BA00'
            />
            <OrangeText>{this.state.order.number}</OrangeText>
          </TopContent>
          <GrayText>{this.state.order.status}</GrayText>
          <BottomContent></BottomContent>
        </LeftContainer>
        <CenterContainer>
          <OrderContainer>
            <RawText>{this.state.order.items.food1.quantity + '  ' + this.state.order.items.food1.food}</RawText>
            <GrayText margin>Sin cebolla</GrayText>
          </OrderContainer>
          <OrderContainer>
            <RawText>{this.state.order.items.food2.quantity + '  ' + this.state.order.items.food2.food}</RawText>
          </OrderContainer>
          <OrderContainer>
            <RawText>{this.state.order.items.food3.quantity + '  ' + this.state.order.items.food3.food}</RawText>
          </OrderContainer>
        </CenterContainer>
        <RightContainer>
          <Button>
            <IconEdit
              name = {'arrow-right'}
              color = '#FF5722'
            />
          </Button>
        </RightContainer>
      </MainContainer>
    )
  }
  ChangeState(){
    if (this.props.state.actualSelect === 'recients') {
      this.state = this.props.state.recients
      Icon = 'ticket'
    }
    else {
      this.state = this.props.state.inProcess
      if (this.props.state.inProcess.order.status === 'En preparacion') {Icon = 'fire'}
      else if (this.props.state.onProcess.order.status === 'Listo para entrega') {Icon = 'cutlery'}
      else if (this.props.state.onProcess.order.status === 'Entregado') {Icon = 'motorcycle'}

    }

  }
}
export default OrderPreview
