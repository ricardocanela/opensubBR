import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestSearch } from '../actions/index';

class TVShowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {season_search:'', episode_search:''}
  }

  onInputChangeSeason(season) {
    this.setState({season_search: season});
  }

  onInputChangeEpisode(episode) {
    this.setState({episode_search: episode});
  }

  onClickSearch(tvShow) {
    tvShow.season = parseInt(this.state.season_search);
    tvShow.episode = parseInt(this.state.episode_search);
    this.props.requestSearch(tvShow);
  }

  render () {
    return (
      <div>
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
        onClick={() => this.onClickSearch(this.props.tvShow)}>
        Search
        </a>
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
