import React, {Component} from 'react';
import {connect} from 'react-redux';


class TVShowSearchResult extends Component {
  constructor(props) {
    super(props);
  }

  renderSearchResult() {
      if(!this.props.searchContentStatus) {
        return (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        );
      } else {
      return this.props.searchResult.pb.map( (sub) => {
          return (
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
          );
        });
      }
    }

  render() {
    return (
      <div>
       <h3>Legendas Encontradas</h3>
        <ul className="collection">
          {this.renderSearchResult()}
        </ul>
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
