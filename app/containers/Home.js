import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BodyStyle from '../components/BodyStyle';
import { randomBackgroundColor } from '../utils';

class Home extends Component {

  render() {
      const { children } = this.props;
    return (
      <BodyStyle style={{ backgroundColor: randomBackgroundColor()}}>
        <div >
          Hello World!

          {children}
        </div>
      </BodyStyle>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    defaultValue: state.defaultValue
  }
}

export default connect(mapStateToProps, {})(Home);
