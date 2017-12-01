import styled from 'styled-components/native'
import React from 'react'

const MainContainer = styled.View`
  width: 100%;
  height: 50%;
`
const LeftContainer = styled.View`
  flex: 1;
`
const RightContainer = styled.View`
  flex: 1;
`
const OrangeText = styled.Text`
  font-size: 20px;
  color: #FF5722;
`
const GrayText =  styled.Text`
  font-size: 15px;
  color: #C7C7CC;
`
const RawText = styled.Text`
  font-size: 20px;
`
const OrderContainer = styled.View`
  flex: 1;
`
const StatusContainer = styled.View`
  flex: 1;
`
const OrderPreview = () =>(
  <MainContainer>
    <LeftContainer>
      <OrangeText></OrangeText>
      <StatusContainer>
        <GrayText>Estatus</GrayText>
        <RawText> En Preparacion </RawText>
      </StatusContainer>
    </LeftContainer>
    <RightContainer></RightContainer>
  </MainContainer>
)
 export default OrderPreview
