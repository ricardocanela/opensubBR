import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTVShow } from '../actions/index';


class TVShowList extends Component {

  onClickSelect(tvShow) {
    this.props.selectTVShow(tvShow);
  }

  renderList() {
    return this.props.tvShows.map((tvShow) => {
      return (
        <a
          key={tvShow.imdbid}
          onClick={() => this.onClickSelect(tvShow)}
          className="collection-item">
          {tvShow.title}
        </a>

      );
    });
  }


  render() {
    return (
      <div className="collection">{this.renderList()}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tvShows: state.tvShows
  };
}

export default connect(mapStateToProps, { selectTVShow })(TVShowList);
