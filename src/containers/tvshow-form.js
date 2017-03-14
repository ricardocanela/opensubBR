import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestSearch } from '../actions/index';
import { contentStatusChange } from '../actions/index';

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

  sendRequestSearch() {
    this.props.tvShow.season = parseInt(this.state.season_search);
    this.props.tvShow.episode = parseInt(this.state.episode_search);
    this.props.requestSearch(this.props.tvShow)
    .then( ()=> {
      this.props.contentStatusChange(true);
    });
  }

  onClickSearch() {
    if (!this.props.contentStatus) {
      this.sendRequestSearch();
    } else {
      this.props.contentStatusChange(false);
      this.sendRequestSearch();
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
      </div>
    );
  };

}

function mapStateToProps(state) {
  return {
    tvShow: state.activeTVShow,
    searchResult: state.searchResult,
    contentStatus: state.contentStatus

  };
}

export default connect(mapStateToProps, {requestSearch, contentStatusChange})(TVShowForm);
