import React,{Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {incrementCounter,decrementCounter} from '../../actions'

class Example extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  constructor(){
    super()
    this.state = {
      counter:null,
    }
}
componentDidMount(){
  this.setState({counter:this.props.counter.counter})
}
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>{this.props.counter.counter}</Text>
        <TouchableOpacity onPress= {this.props.increment}>
          <Text>INCREMENT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.decrement}>
          <Text>DECREMENT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapDispatchToProps = (dispatch)=>{
  return {
    increment:()=>dispatch(incrementCounter()),
    decrement:()=>dispatch(decrementCounter())
  }
}
const mapStateToProps = (state)=>{
  return {
    counter: state.counterReducer
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Example)
