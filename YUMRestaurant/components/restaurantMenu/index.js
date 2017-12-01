import styled from 'styled-components/native'

export const ScreenContainer = styled.View`
  width: 100%;
  height: ${props => props.height ? props.height : null};
  background-color: #FFF;
  align-items: center;
`
export const MenuList = styled.FlatList`
  width: 100%;
  padding-top: 10;
`
export const Item = styled.View`
  
`
export const MenuItemLeft = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
  padding-top: 3px;
  padding-bottom: 3px;
`
export const MenuItemRight = styled.View`
  flex: ${props => props.flex ? props.flex : 1};
`
export const Row = styled.View`
  width: ${props => props.width ? props.width : '100%'};
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
  ${props => {
    if (props.isSaucer) {
      return `padding: 5px 0px;`
    }
  }};
  ${props => {
    if (props.borderTop) {
      return `
        border-top-width: 2px;
        border-color: ${props.borderColor};
      `
    }
  }};
  ${props => {
    if (props.padding) {
      return `padding: 10px 5px;`
    }
  }};
`
export const Column = styled.View`
  justify-content: ${props => props.justifyCenter ? 'center' : 'flex-start'};
  ${props => {
    if (props.borderTop) {
      return `
        border-top-width: 2px;
        border-color: ${props.borderColor};
      `
    }
  }};
  ${props => {
    if (props.flexEnd) {
      return `align-items: flex-end;`
    }
  }};
`
export const MenuImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border: 2px;
  border-color: #FF5722;
`
export const Paragraph = styled.Text`
  font-size: ${props => props.size ? props.size : 14};
  ${props => {
    if (props.color) {
      return `color: ${props.color};`
    }
  }};
`
export const SaucerButton = styled.TouchableWithoutFeedback`
  
`
export const Wrapper = styled.View`
  width: 90%;
  flex-direction: row;
  border-bottom-width: 2px;
  border-color: #C7C7CC;
  margin-bottom: 10px;
  padding-bottom: 10px;
`
