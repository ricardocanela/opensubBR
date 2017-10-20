import React, { Component } from 'react';
import { connect } from 'react-redux';
import  TVShowForm  from './tvshow-form';
import  MovieForm  from './movie-form';
import TVShowDetail from './tvshow-detail';


class FormController extends Component {

  render() {
    if (Object.keys(this.props.activeTarget).length !== 0) {
      if (this.props.activeTarget.classification === "tvshow") {
        return (
          <div>
            <TVShowDetail />
            <TVShowForm />
          </div>
        );
      } else if (this.props.activeTarget.classification === "movie") {
        return (
          <div>
            <TVShowDetail />
            <MovieForm />
          </div>
        );
      }
    } else {
      return (
        <div>
          Escolha algo para ver!
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    activeTarget: state.activeTarget,
  };
}

export default connect(mapStateToProps)(FormController);
