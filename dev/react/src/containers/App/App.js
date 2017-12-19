import React, { Component } from 'react';

import { connect } from 'react-redux';


import * as authActions from '../../redux/modules/auth'

@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {...authActions}
)
export default class App extends Component {

    constructor(props) {
      super(props)
      console.log(this.props.children)
    }

    componentDidMount() {

    }

  render() {
    return(
      <div>{this.props.children}</div>
    )
  }
}