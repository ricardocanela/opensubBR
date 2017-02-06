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
        <a
          key={serie.imdbid}
          onClick={() => this.onClickSelect(serie)}
          className="collection-item">
          {serie.title}
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
    series: state.series
  };
}

export default connect(mapStateToProps, { selectSerie })(SeriesList);
