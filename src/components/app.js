import React, { Component } from 'react';
import TestContainer from '../containers/test-container';
import HelloWorld from './helloworld';


export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <TestContainer />
      </div>
    );
  }
}
