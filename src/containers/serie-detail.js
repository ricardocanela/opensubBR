import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { requestDownload } from '../actions/index';

class SerieDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {season_search:' ', episode_search: ' '};
  }

  onInputChangeSeason(season) {
    this.setState({season_search: season});
  }

  onInputChangeEpisode(episode) {
    this.setState({episode_search: episode});
  }

  onClickDownload(serie) {
    serie.season = parseInt(this.state.season_search);
    serie.episode = parseInt(this.state.episode_search);
    this.props.requestDownload(serie);
  }

  formView = () => {
    return (
      <div>
        <form>
          <label>Season</label>
          <input
            value={this.state.season_search}
            onChange={event => this.onInputChangeSeason(event.target.value)} >
          </input>

          <br/>
          <label>Episode</label>
          <input
          value={this.state.episode_search}
          onChange={event => this.onInputChangeEpisode(event.target.value)} />
        </form>
        <a className="waves-effect waves-light btn"
        onClick={() => this.onClickDownload(this.props.serie)}>
        Search
        </a>
      </div>
    );
  }

  detailsView = () => {
    const IMDB_URL = "http://www.imdb.com/title/"
    return (
      <div>
        <h3>{this.props.serie.title}</h3>
        <a href={IMDB_URL+this.props.serie.imdbid}>Link para o IMDB</a>
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
    if(!this.props.serie) {
      return <div> Escolha uma série para inicar a busca!</div>;
    }

    return (
    <div>
      <div className="col s6">
        {this.detailsView()}
        {this.formView()}
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
    serie: state.activeSerie,
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps, { requestDownload })(SerieDetail);
