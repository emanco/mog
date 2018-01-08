import React, { Component } from 'react';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import * as AuthActions from '../../redux/modules/auth'
import {LoginModal} from '../../components'


@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    Promise.resolve(
      dispatch(AuthActions.authorise())
    );
  }
}])
@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload,
    formVisible: state.authReducer.formVisible
  }),
  {}
)
export default class App extends Component {

  constructor() {
    super()

    this.state = {
      loginOpen: false
    }

    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleToggleModal = this.handleToggleModal.bind(this)
  }

  handleLoginClick = () => {
    this.setState({loginOpen: true})
  }

  handleModalClose = () => {
    this.setState({loginOpen: false})
  }

  handleToggleModal = (value) => {
    this.setState({
      loginOpen: value
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.handleLoginClick}>Log in / Out</button>
        {/*<LoginModal
          loginOpen={this.props.formVisible}
          toggleModalCallback={this.handleToggleModal}
          /> */}
        <div>{this.props.children}</div>
      </div>
    )
  }
}