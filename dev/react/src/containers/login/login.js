import React, { Component } from 'react';

import { browserHistory } from 'react-router'
import { connect } from 'react-redux';

import { LoginForm } from '../../components'

import * as AuthActions from '../../redux/modules/auth'

@connect(
  (state, ownProps) => ({
    authError: state.authReducer.error,
    authSuccess: state.authReducer.success,
    loggedIn: state.authReducer.loggedIn
  }),
  {...AuthActions}
)

class Login extends Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleSubmit = (user, pass) => {
    this.props.login(user, pass)
  }

  handleRedirect = () => {
    console.log(this.props.authSuccess)
    if (this.props.authSuccess) {
      browserHistory.push('/');
    }
  }

  handleLogout = () => {
    this.props.logOut()
  }


  render() {
    return (
      <div>
        <LoginForm error={this.props.authError} loggedIn={this.props.loggedIn} success={this.props.authSuccess} submitCallback={this.handleSubmit} logoutCallback={this.handleLogout} />
      </div>
    );
  }
}

export default Login;