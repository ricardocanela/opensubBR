import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSearch, contentStatusChange } from '../actions/index';

class MovieForm extends Component {

  onClickSearch() {
    if (this.props.searchContentStatus) {
      this.props.contentStatusChange(false);
      this.sendSearchRequest();
    } else {
      this.sendSearchRequest();
    }
  }

  sendSearchRequest() {
    const movieSearchTerms = this.props.movie;
    this.props.requestSearch(movieSearchTerms)
    .then(() => {
      this.props.contentStatusChange(true);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s8">
          <a
            className="waves-effect waves-light btn"
            onClick={() => this.onClickSearch()}
          >
          Search
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.activeTarget,
    searchContentStatus: state.searchContentStatus,
  };
}

export default connect(mapStateToProps, { requestSearch, contentStatusChange })(MovieForm);
