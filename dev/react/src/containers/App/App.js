import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router'
import { asyncConnect } from 'redux-connect';
import * as AuthActions from '../../redux/modules/auth'
import {Header, Footer} from '../../components'


@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    Promise.resolve(
      // dispatch(AuthActions.authorise())
    );
  }
}])
@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload,
    formVisible: state.authReducer.formVisible
  }),
  {...AuthActions}
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

  componentDidMount() {
    this.props.isAuthorised() // check if jwtToken is present and set logged in if it is
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
        <Header/>
        <div>{this.props.children}</div>
        <Footer/>
      </div>
    )
  }
}