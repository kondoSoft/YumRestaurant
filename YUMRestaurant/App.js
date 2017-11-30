import React from 'react';
import {Provider} from 'react-redux'
import {Store} from './store'
import {AppStack} from './routes'

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {Store} >
        <AppStack/>
      </Provider>
    );
  }
}
