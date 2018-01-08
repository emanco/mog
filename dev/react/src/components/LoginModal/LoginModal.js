import React, { Component } from 'react';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';
import * as AuthActions from '../../redux/modules/auth'
import Modal from 'react-modal'
import {Alert} from '../../components'

import './../../scss/components/loginModal.css';

const customStyles = {
  overlay: {
    'z-index': '15'
  },
  content: {
    maxHeight: '400px',
    width: '460px',
    margin: 'auto',
    borderRadius: '0',
    padding: '0.5em 2em 2em 2em'
  }
}


// This is a rare exception where a container would be excessive so we'll connect a component to state.
// However that may change if we end of with various different modals. At present only one is planned.

export default class LoginModal extends Component {

  constructor() {
    super()

    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
  }

  handleModalOpen = () => {
    this.props.toggleModalCallback(true)
  }

  handleModalClose = () => {
    this.props.toggleModalCallback(false)
  }

  render() {
    return(
      <Modal
        isOpen={this.props.loginOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={this.handleModalClose}
        style={customStyles}
        >
        <div className='login-form'>
          <h2 className='h2'>Log In</h2>
          <form>
            <div className='form-element'>
              <label for="username">Username</label>
              <input type='text' name="username" className="form-control"/>
            </div>
            <div className='form-element'>
              <label for="password">Password</label>
              <input type='password' name="password" className="form-control"/>
            </div>
            <div className='form-element'>
              <button className="button">Log In</button>
            </div>
            <div className='form-element'>
              <Alert type="error" msg="Log in failed. Please check your details and try again" />
            </div>
            <div className='form-element'>
              <Alert type="success" msg="Log in failed. Please check your details and try again" />
            </div>
          </form>
        </div>
      </Modal>
    )
  }
}