import React, { Component } from 'react';
import TVShowList from '../containers/tvshow-list';
import TVShowDetail from '../containers/tvshow-detail';
import NavBar from './navbar';


export default class App extends Component {
  render() {
    return (
        <div className="row">
          <TVShowList />
          <div className="col s2">
            Content
          </div>
          <div className="col s10">
            <TVShowDetail />
          </div>
        </div>
    );
  }
}
