import React, { Component } from 'react';
import TVShowList from '../containers/tvshow-list';
import TVShowDetail from '../containers/tvshow-detail';
import NavBar from './navbar';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="row">
          <div className="col s4">
              <h3>Lista de Séries</h3>
              <TVShowList />
          </div>
          <div className="col s8">
            <TVShowDetail />
          </div>
        </div>
      </div>
    );
  }
}
