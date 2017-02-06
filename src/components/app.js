import React, { Component } from 'react';
import SeriesList from '../containers/series-list';
import SerieDetail from '../containers/serie-detail';
import HelloWorld from './helloworld';


export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s4">
          <h3>Lista de Séries</h3>
          <SeriesList />
        </div>
        <div className="col s8">
          <SerieDetail />
        </div>
      </div>
    );
  }
}