import React, { Component } from 'react';
import { connect } from 'react-redux';
import TVShowForm from './tvshow-form';


class TVShowDetail extends Component {

  detailsView = () => {
    const IMDB_URL = "http://www.imdb.com/title/"
    return (
      <div>
        <h3>{this.props.tvShow.title}</h3>
        <a href={IMDB_URL+this.props.tvShow.imdbid}>Link para o IMDB</a>
      </div>
    );
  }

  render() {
    if(!this.props.tvShow) {
      return (
        <h3>Escolha uma Série</h3>
      )
    }

    return (
    <div>
      {this.detailsView()}
      <TVShowForm />
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tvShow: state.activeTVShow
  };
}

export default connect(mapStateToProps)(TVShowDetail);
