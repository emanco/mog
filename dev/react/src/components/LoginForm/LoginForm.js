import React, { Component } from 'react';

import {Alert} from "../../components"

import './../../scss/components/loginForm.css';

export default class LoginForm extends Component {

    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this)
      this.onLogOut = this.onLogOut.bind(this)
    }

    onSubmit = (e) => {
      e.preventDefault();
      this.props.submitCallback(this.username.value, this.password.value)
    }

    onLogOut = () => {
      this.props.logoutCallback();
    }
    render() {

        return (
          <div className='login-form'>
          {!this.props.loggedIn &&<div className='login-inner'>
              <h2 className='h2'>Log In</h2>
                <form onSubmit={this.onSubmit}>
                <div className='form-element'>
                  <label htmlFor="username">Username</label>
                  <input type='text' name="username" className="form-control" ref={(input) => { this.username = input}}/>
                </div>
                <div className='form-element'>
                  <label htmlFor="password">Password</label>
                  <input type='password' name="password" className="form-control" ref={(input) => { this.password = input}}/>
                </div>
                <div className='form-element'>
                  <button className="button" onClick={this.onSubmit}>Log In</button>
                </div>
                {this.props.error && <div className='form-element'>
                  <Alert type="error" msg="Log in failed. Please check your details and try again" />
                </div>}
              </form>
             </div> }

            {this.props.loggedIn &&
              <div>
                <Alert type="success" msg="You are logged in" />
                <button className="button" onClick={this.onLogOut}>Log out</button>
              </div>}
          </div>
        );
    }
}