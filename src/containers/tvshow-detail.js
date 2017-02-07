import React, { Component } from 'react';
import { connect } from 'react-redux';
import TVShowForm from './tvshow-form';
import TVShowSearchResult from './tvshow-search-result';

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
      return <div> Escolha uma série para inicar a busca!</div>;
    }

    return (
    <div>
      <div className="col s6">
        {this.detailsView()}
        <TVShowForm />
      </div>
      <div className="col s6">
        <h3>Legendas Encontradas</h3>
        <TVShowSearchResult />
      </div>
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
