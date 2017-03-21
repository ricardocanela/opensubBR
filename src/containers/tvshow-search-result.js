import React, { Component } from 'react';
import { connect } from 'react-redux';


class TVShowSearchResult extends Component {
  constructor(props) {
    super(props);
  }

 preLoader() {
   return (
     <div>
       <div className="preloader-wrapper big active"></div>
       <div className="preloader-wrapper big active"></div>
       <div className="preloader-wrapper big active"></div>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
          </div>
        </div>
    </div>
    );
  }

  subtitleComponents() {
    return this.props.searchResult.map( (sub) => {
        return (
        <ul className="collection">
          <div className="collection-item"
          key={sub.date}>
            <li>
            <div>
              <h12>Nome: {sub.subFilename}</h12>
              <br/>
              <h12>Quantidade de Downloads: {sub.downloads}</h12>
              <br/>
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
      if(!this.props.searchContentStatus) {
        return this.preLoader();
      } else {
        if (this.props.searchResult) {
          return this.subtitleComponents();
        } else {
          alert("Nenhuma legenda encontrada, por favor, pesquise novamente");
        }
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
      searchContentStatus: state.searchContentStatus
  };
}

export default connect(mapStateToProps)(TVShowSearchResult);
