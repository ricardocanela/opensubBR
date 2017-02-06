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

  renderResult() {
    if(!this.props.searchResult) {
      return <div>Waiting for search...</div>
    } else {
    return this.props.searchResult.pb.map( (sub) => {
        return (
          <div className="collection-item"
          key={sub.date}>
            <li>
              {sub.subFilename}
            </li>
          </div>
        );
      });
    }
  }

  renderTest() {
    return <div>Teste</div>;
  }

  render() {
    if(!this.props.serie) {
      return <div> Select a serie to get started!</div>;
    }

    return (
      <div className="col s8">
        <h3>Detalhes da Série</h3>
        <div>{this.props.serie.title}</div>
        <div>Link para o IMDB: {this.props.serie.imdbid}</div>

        <form>
          <label>Season</label>
          <input
          value={this.state.season_search}
          onChange={event => this.onInputChangeSeason(event.target.value)} />
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
        <ul className="collection">{this.renderResult()}</ul>
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
