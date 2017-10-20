import React, { Component } from 'react';
import TVShowList from '../containers/tvshow-list';
import TVShowSearchResult from '../containers/tvshow-search-result';
import FormController from '../containers/form-controller';

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <TVShowList />
        <div className="col s2">
          <br />
        </div>
        <div className="col s10">
          <div className="row">
            <div className="col s6">
              <FormController />
            </div>
            <div className="col s6">
              <TVShowSearchResult />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
