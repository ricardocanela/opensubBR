import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubtitleList from './subtitle-list';


class TVShowSearchResult extends Component {
  static preLoader() {
    return (
      <div>
        <div className="preloader-wrapper big active" />
        <div className="preloader-wrapper big active" />
        <div className="preloader-wrapper big active" />
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle" />
              <div className="gap-patch" />
              <div className="circle" />
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderSearchResult() {
    const EMPTY = 0;
    const searchResult = this.props.searchResult;
    const searchContentStatus = this.props.searchContentStatus;

    if (searchContentStatus === true) {
      if (searchResult.length > EMPTY) {
        return <SubtitleList />;
      } else if (searchResult.length === EMPTY) {
        return alert('Nenhuma legenda encontrada, por favor, pesquise novamente');
      }
    } else if (searchContentStatus === false) {
      return TVShowSearchResult.preLoader();
    }
    return undefined;
  }

  render() {
    return (
      <div>
        <h3>Legendas Encontradas</h3>
        {this.renderSearchResult()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult,
    searchContentStatus: state.searchContentStatus,
  };
}

TVShowSearchResult.propTypes = {
  searchContentStatus: React.PropTypes.bool.isRequired,
  searchResult: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(TVShowSearchResult);
