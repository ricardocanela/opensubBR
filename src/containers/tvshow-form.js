import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestSearch, contentStatusChange } from '../actions/index';


class TVShowForm extends Component {
  constructor(props) {
    super(props);
    this.state = { season_search: '', episode_search: '' };
  }

  onInputChangeSeason(season) {
    this.setState({ season_search: season });
  }

  onInputChangeEpisode(episode) {
    this.setState({ episode_search: episode });
  }

  onClickSearch() {
    if (this.props.searchContentStatus) {
      this.props.contentStatusChange(false);
      this.sendSearchRequest();
    } else {
      this.sendSearchRequest();
    }
  }

  sendSearchRequest() {
    const BASE = 10;
    const tvShowSearchTerms = this.props.tvShow;
    const seasonSearchTerm = parseInt(this.state.season_search, BASE);
    const episodeSearchTerm = parseInt(this.state.episode_search, BASE);

    tvShowSearchTerms.season = seasonSearchTerm;
    tvShowSearchTerms.episode = episodeSearchTerm;

    this.props.requestSearch(tvShowSearchTerms)
    .then(() => {
      this.props.contentStatusChange(true);
    });
  }

  constructArray(value) {
    const arrayOfValue = [];
    let i = 0;
    for (i = 0; i < value; i += 1) {
      arrayOfValue[i] = i + 1;
    }
    return arrayOfValue;
  }

  generatingOptions(array) {
    return array.map((element) => {
      return (
        <option
          value={element}
          key={element}
        >
          {element}
        </option>
      );
    });
  }

  optionsForSeasons() {
    if (this.props.tvShow) {
      const numberOfSeasons = this.props.tvShow.numberOfSeasons;
      const arrayOfSeasons = this.constructArray(numberOfSeasons);
      return this.generatingOptions(arrayOfSeasons);
    }
    return undefined;
  }

  optionsForEpisodes() {
    if (this.props.tvShow) {
      const numberOfEpisodes = this.props.tvShow.numberOfEpisodesPerSeason;
      const arrayOfEpisodes = this.constructArray(numberOfEpisodes);
      return this.generatingOptions(arrayOfEpisodes);
    }
    return undefined;
  }

  render() {
    return (
      <div className="row">
        <div className="col s8">
          <form>
            <label>Season</label>
            <div className="input-field">
              <select
                className="browser-default"
                value={this.state.season_search}
                onChange={event => this.onInputChangeSeason(event.target.value)}
              >
                {this.optionsForSeasons()}
              </select>
            </div>
            <label>Episode</label>
            <div className="input-field">
              <select
                className="browser-default"
                value={this.state.episode_search}
                onChange={event => this.onInputChangeEpisode(event.target.value)}
              >
                {this.optionsForEpisodes()}
              </select>
            </div>
          </form>
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
    tvShow: state.activeTarget,
    searchContentStatus: state.searchContentStatus,
  };
}

TVShowForm.propTypes = {
  searchContentStatus: React.PropTypes.bool.isRequired,
  contentStatusChange: React.PropTypes.func.isRequired,
  requestSearch: React.PropTypes.func.isRequired,
  tvShow: React.PropTypes.object.isRequired,

};

export default connect(mapStateToProps, { requestSearch, contentStatusChange })(TVShowForm);
