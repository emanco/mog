import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as AuthActions from '../../redux/modules/auth'
import {Header, Footer} from '../../components'

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

  setPageClass() {
    return this.props.location.pathname.replace('/','');
  }

  render() {
    const pageClass = this.setPageClass()
    return(
      <div className={pageClass}>
        <Header/>
        <div>{this.props.children}</div>
        <Footer/>
      </div>
    )
  }
}