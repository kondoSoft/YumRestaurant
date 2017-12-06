import styled from 'styled-components/native'
import React from 'react'

const MainContainer = styled.View`
  flex:1;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: #c7c7cc;
`
const LeftContainer = styled.View`
  flex: 2;
  justify-content: space-around;
  padding-top: 10px;
`
const RightContainer = styled.View`
  flex: 1;
  align-items: center;
`
const OrangeText = styled.Text`
  font-size: 20px;
  color: #FF5722;
`
const GrayText =  styled.Text`
  font-size: 15px;
  color: #C7C7CC;
  margin-left:  ${props => props.margin ? '35px' : '0'};
`
const RawText = styled.Text`
  font-size: 20px;
`
const OrderContainer = styled.View`
  flex: 1;
  padding: 0 10px 0 10px;
`
const StatusContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: baseline;
  padding: 0 10px 0 10px;

`
const OrderPreview = () =>(
  <MainContainer>
    <LeftContainer>
      <OrangeText>ORDEN#368</OrangeText>
      <GrayText> hace 01 min</GrayText>
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
    </LeftContainer>
    <RightContainer>
    </RightContainer>
  </MainContainer>
)
 export default OrderPreview
