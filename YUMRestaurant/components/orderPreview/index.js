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
  margin-left:  ${props => props.margin ? '35px' : '0'};
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
class OrderPreview extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <MainContainer>
        <LeftContainer>
          <TopContent>
            <IconEdit
              name = {'ticket'}
              color = '#F7BA00'
            />
            <OrangeText>#368</OrangeText>
          </TopContent>
          <GrayText> hace 01 min</GrayText>
          <BottomContent></BottomContent>
        </LeftContainer>
        <CenterContainer>
          <OrderContainer>
            <RawText>02  Tostadas de pollo</RawText>
            <GrayText margin>Sin cebolla</GrayText>
          </OrderContainer>
          <OrderContainer>
            <RawText>01  Milanesa de res</RawText>
          </OrderContainer>
          <OrderContainer>
            <RawText>02  Horchata 500 ml.</RawText>
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
}
export default OrderPreview
