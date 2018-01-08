import React, { Component } from 'react';

import { StickyBar, SearchResults, SearchUser } from '../../components';
import { connect } from 'react-redux';

import { Alert, LoginForm } from '../../components'

import * as AuthActions from '../../redux/modules/auth'

@connect(
  (state, ownProps) => ({
    authError: state.authReducer.error,
    authSuccess: state.authReducer.success
  }),
  {...AuthActions}
)

class Login extends Component {

  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (user, pass) => {
    this.props.login(user, pass)
  }


  render() {

    return (
      <LoginForm error={this.props.authError} success={this.props.authSuccess} submitCallback={this.handleSubmit}/>
    );
  }
}

export default Login;


/*export default connect((state) => {
    return state.searchReducer;
})(Searchpage);*/