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
  background-color: ${(props) => props.state ==='recients' ? '#FF5722' :'#fff' };
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
const RightButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${(props) => props.state ==='inProcess' ? '#FF5722' :'#fff' };
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`
const Text = styled.Text`
  color: ${(props) => props.color ?  props.color : '#fff' };

`
class Selector extends Component {
  constructor() {
    super()
    this.state = {
      actualSelect : 'recients',
    }
    this.ChangeSelect= this.ChangeSelect.bind(this)
  }
  render(){
    return(
      <MainContainer>
        <LeftButton  state={this.state.actualSelect} onPress={()=> this.ChangeSelect('recients')}>
          <Text color = {this.state.actualSelect === 'recients' ? '#FFF': '#FF5722' } >RECIENTES</Text>
        </LeftButton>
        <RightButton state={this.state.actualSelect} onPress={()=> this.ChangeSelect('inProcess')} >
          <Text color = {this.state.actualSelect === 'inProcess' ? '#FFF': '#FF5722' } >EN PROCESO</Text>
        </RightButton>
      </MainContainer>
    )
  }
  ChangeSelect(select){
    let state = this.state
    state.actualSelect = select
    this.setState(state)
  }
}
export default Selector
