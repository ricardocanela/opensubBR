import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { requestSearch } from '../actions/index';
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

  renderSearchResult() {
    if(!this.props.searchResult) {
      return <div>Esperando Busca...</div>
    } else {
    return this.props.searchResult.pb.map( (sub) => {
        return (
          <div className="collection-item"
          key={sub.date}>
            <li>
            <div>
              <h12>Nome: {sub.subFilename}</h12>
              <br/>
              <h12>Quantidade de Downloads: {sub.downloads}</h12>
              <br/>
              <div className="chip">
                <a href={sub.url}>Download</a>
              </div>
            </div>
            </li>
          </div>
        );
      });
    }
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
        <ul className="collection">{this.renderSearchResult()}</ul>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tvShow: state.activeTVShow,
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps, { requestSearch })(TVShowDetail);
