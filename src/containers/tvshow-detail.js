import React, { Component } from 'react';
import { connect } from 'react-redux';


class TVShowDetail extends Component {

  detailsView = () => {
    const IMDB_URL = 'http://www.imdb.com/title/';
    return (
      <div>
        <h3>{this.props.target.title}</h3>
        <a href={IMDB_URL + this.props.target.imdbid}>Link para o IMDB</a>
      </div>
    );
  }

  render() {
    if (!this.props.target) {
      return (
        <h3>Escolha algo para assistir</h3>
      );
    }

    return (
      <div className="row">
        {this.detailsView()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    target: state.activeTarget,
  };
}

TVShowDetail.propTypes = {
  target: React.PropTypes.object.isRequired,
};


export default connect(mapStateToProps)(TVShowDetail);
