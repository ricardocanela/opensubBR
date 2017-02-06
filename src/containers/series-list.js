import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSerie } from '../actions/index';


class SeriesList extends Component {

  onClickSelect(serie) {
    this.props.selectSerie(serie);
  }

  renderList() {
    return this.props.series.map((serie) => {
      return (
      <div className="collection-item"
        key={serie.imdbid}>
        <li
          onClick={() => this.onClickSelect(serie)}>
          {serie.title}
        </li>
      </div>
      );
    });
  }


  render() {
    return (
      <ul className="collection">{this.renderList()}</ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    series: state.series
  };
}

export default connect(mapStateToProps, { selectSerie })(SeriesList);
