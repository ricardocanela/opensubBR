import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDownload } from '../actions/index';


class SeriesList extends Component {

  onClickDownload() {
    this.props.requestDownload(this.props.series[0]);
  }

  renderList() {
    return this.props.series.map((series) => {
      return (
          <li
            key={series.title}
            className="collection-item"
            onClick={this.onClickDownload.bind(this)}>
            {series.title}
          </li>
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

export default connect(mapStateToProps, { requestDownload })(SeriesList);
