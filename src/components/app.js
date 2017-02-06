import React, { Component } from 'react';
import SeriesList from '../containers/series-list';
import HelloWorld from './helloworld';


export default class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <SeriesList />
      </div>
    );
  }
}
