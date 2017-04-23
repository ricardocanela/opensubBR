import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubtitleItem from './subtitle-item';

class SubtitleList extends Component {

  renderList() {
    return this.props.searchResult.map((subtitle) => {
      return (
        <SubtitleItem
          subtitle={subtitle}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchResult: state.searchResult,
  };
}

SubtitleList.propTypes = {
  searchResult: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(SubtitleList);
