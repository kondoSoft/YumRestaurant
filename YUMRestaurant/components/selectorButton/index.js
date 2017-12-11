import React,{Component} from 'react'
import styled from 'styled-components/native'

const MainContainer = styled.View`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  margin: 20px 0 20px 0;
  border-radius: 10px;
  border: 1px solid #FF5722
`
const LeftButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.state ==='recients' ? '#fff' :'#FF5722' };
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const RightButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.state ==='inProcess' ? '#fff' :'#FF5722' };
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
const Text = styled.Text`
  color: ${(props) => props.color ?  props.color : '#FF5722' };

`
class Selector extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <MainContainer>
        <LeftButton  state={this.props.state} onPress={()=> this.props.change('recients')}>
          <Text color = {this.props.state === 'recients' ? '#FF5722': '#fff' } >RECIENTES</Text>
        </LeftButton>
        <RightButton state={this.props.state} onPress={()=> this.props.change('inProcess')} >
          <Text color = {this.props.state === 'inProcess' ? '#FF5722': '#fff' } >EN PROCESO</Text>
        </RightButton>
      </MainContainer>
    )
  }
}
export default Selector
