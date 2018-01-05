import React, { Component } from 'react';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import * as AuthActions from '../../redux/modules/auth'


@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    Promise.resolve(dispatch(AuthActions.authorise()));
  }
}])
@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {}
)
export default class App extends Component {
  render() {
    return(
      <div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}