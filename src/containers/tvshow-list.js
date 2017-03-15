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
        <li
          key={tvShow.imdbid}
          onClick={() => this.onClickSelect(tvShow)}>
          <a>{tvShow.title}</a>
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
              <div className="background">
                <img  />
              </div>
              <h5>Lista de Séries</h5>
            </div>
          </li>
          {this.renderList()}
        </ul>
        <a data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
    )
  }
  
}

function mapStateToProps(state) {
  return {
    tvShows: state.tvShows
  };
}

export default connect(mapStateToProps, { selectTVShow })(TVShowList);
