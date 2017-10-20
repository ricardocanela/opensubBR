import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectTarget } from '../actions/index';


class TVShowList extends Component {

  onClickSelect(tvShow) {
    this.props.selectTarget(tvShow);
  }

  renderListTvShows() {
    return this.props.tvShows.map((tvShow) => {
      return (
        <li
          key={tvShow.imdbid}
          onClick={() => this.onClickSelect(tvShow)}
        >
          <a>{tvShow.title}</a>
        </li>

      );
    });
  }

  renderListMovies() {
    return this.props.movies.map((movie) => {
      return (
        <li
          key={movie.imdbid}
          onClick={() => this.onClickSelect(movie)}
        >
          <a>{movie.title}</a>
        </li>

      );
    });
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="side-nav fixed">
          <li>
            <div className="userView">
              <div className="background" />
              <h5>Lista de Conteúdo</h5>
            </div>
          </li>
          {this.renderListTvShows()}
          {this.renderListMovies()}
        </ul>
        <a data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    tvShows: state.tvShows,
    movies: state.movies,
  };
}

TVShowList.propTypes = {
  selectTarget: React.PropTypes.func.isRequired,
  tvShows: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps, { selectTarget })(TVShowList);
