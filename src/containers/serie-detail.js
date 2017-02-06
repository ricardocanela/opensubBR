import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestDownload } from '../actions/index';

class SerieDetail extends Component {

  onClickDownload(serie) {
    this.props.requestDownload(serie);
  }

  renderResult() {
    if(!this.props.searchResult) {
      return <div>Waiting for search...</div>
    } else {
    return this.props.searchResult.pb.map( (sub) => {
        return (
          <div className="collection-item"
          key={sub.date}>
            <li>
              Nome do arquivo: {sub.subFilename}
            </li>
          </div>
        );
      });
    }
  }

  renderTest() {
    return <div>Teste</div>;
  }

  render() {
    if(!this.props.serie) {
      return <div> Select a serie to get started!</div>;
    }


    return (
      <div>
        <h3>Detalhes da Série</h3>
        <div>{this.props.serie.title}</div>
        <div>Link para o IMDB: {this.props.serie.imdbid}</div>
        <a className="waves-effect waves-light btn"
        onClick={() => this.onClickDownload(this.props.serie)}>
        Search
        </a>
        <ul className="collection">{this.renderResult()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    serie: state.activeSerie,
    searchResult: state.searchResult
  };
}

export default connect(mapStateToProps, { requestDownload })(SerieDetail);
