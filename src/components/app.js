import React, { Component } from 'react';
import TVShowList from '../containers/tvshow-list';
import TVShowDetail from '../containers/tvshow-detail';
import TVShowForm from '../containers/tvshow-form';
import TVShowSearchResult from '../containers/tvshow-search-result';
import NavBar from './navbar';


export default class App extends Component {
  render() {
    return (
        <div className="row">
          <TVShowList />
          <div className="col s2">
            <br/>
          </div>
          <div className="col s10">
            <div className="row">

                <TVShowDetail />
                <TVShowForm />
              
            </div>
          </div>
        </div>
    );
  }
}
