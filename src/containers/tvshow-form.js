import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestSearch } from '../actions/index';

class TVShowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {season_search:'', episode_search:'', searchResult: null}
  }

  onInputChangeSeason(season) {
    this.setState({season_search: season});
  }

  onInputChangeEpisode(episode) {
    this.setState({episode_search: episode});
  }

  requestSearch() {
    this.props.tvShow.season = parseInt(this.state.season_search);
    this.props.tvShow.episode = parseInt(this.state.episode_search);
    this.props.requestSearch(this.props.tvShow)
    .then( ()=> {
      this.setState({searchResult: this.props.searchResult});
    });
  }

  onClickSearch() {
    if (!this.state.searchResult) {
      this.requestSearch();
    } else {
      this.setState({searchResult: null})
      this.requestSearch();
    }
  }

  renderSearchResult() {
      if(!this.state.searchResult) {
        return (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        );
      } else {
      return this.state.searchResult.pb.map( (sub) => {
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

  render () {
    return (
      <div className="row">
        <div className="col s6">
          <form>
            <label>Season</label>
            <input
              value={this.state.season_search}
              onChange={event => this.onInputChangeSeason(event.target.value)} >
            </input>
            <label>Episode</label>
            <input
            value={this.state.episode_search}
            onChange={event => this.onInputChangeEpisode(event.target.value)} />
          </form>
          <a className="waves-effect waves-light btn"
          onClick={() => this.onClickSearch()}>
          Search
          </a>
        </div>
        <div className="col s6">
          <h3>Legendas Encontradas</h3>
          <ul className="collection">
            {this.renderSearchResult()}
          </ul>
        </div>
      </div>
    );
  };

}

function mapStateToProps(state) {
  return {
    tvShow: state.activeTVShow,
    searchResult: state.searchResult

  };
}

export default connect(mapStateToProps, {requestSearch})(TVShowForm);
