import React, { Component } from 'react';
import { connect } from 'react-redux';


class TVShowSearchResult extends Component {
  constructor(props) {
    super(props);
  }

  preLoader() {
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

  subtitleComponents() {
    return this.props.searchResult.map((sub) => {
      return (
        <ul
          className="collection"
          key={sub.downloads}
        >
          <div
            className="collection-item"
          >
            <li>
              <div>
                <h12>Nome: {sub.subFilename}</h12>
                <br />
                <h12>Quantidade de Downloads: {sub.downloads}</h12>
                <br />
                <div className="chip">
                  <a href={sub.url}>Download</a>
                </div>
              </div>
            </li>
          </div>
        </ul>
      );
    });
  }


  renderSearchResult() {
    const EMPTY = 0;
    const searchResult = this.props.searchResult;
    const searchContentStatus = this.props.searchContentStatus;

    if (searchContentStatus === true) {
      if (searchResult.length > EMPTY) {
        return this.subtitleComponents();
      } else if (searchResult.length === EMPTY) {
        alert('Nenhuma legenda encontrada, por favor, pesquise novamente');
      }
    } else {
      return this.preLoader();
    }
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
