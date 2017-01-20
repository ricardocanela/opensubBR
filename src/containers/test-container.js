import React, { Component } from 'react';
import { connect } from 'react-redux';


class TestContainer extends Component {

  renderMessage() {
    return this.props.test.map((test) => {
      return (
          <li key={test.message}>{test.message}</li>
      );
    });
  }


  render() {
    return (
      <ul>{this.renderMessage()}</ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  };
}

export default connect(mapStateToProps)(TestContainer);
