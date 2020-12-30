import React from 'react';
import AppNav from './src/navigation'
import {Provider} from 'react-redux'
import store from './src/store'

export default class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <AppNav/>
      </Provider>
    )
  }
}