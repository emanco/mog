import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Hotkeys from 'react-hot-keys';
import Moment from 'react-moment';

import './../../scss/components/stickyActions.css';

export default class StickyActions extends Component {

  constructor(props) {
    super(props)

    this.handleClickApprove = this.handleClickApprove.bind(this)
    this.handleClickDecline = this.handleClickDecline.bind(this)

    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleShortcutSubmit = this.handleShortcutSubmit.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleKeyboardOpen = this.handleKeyboardOpen.bind(this);

    this.state = {
      status: 'closed',
      action: '',
      title: '',
      noteValue: ''
    }
  }

  componentDidUpdate() {
    if (this.state.status === "open") {
      setTimeout(() => {
        this.textArea.focus();
      }, 200) // This needs to match the animation time set in CSS otherwise the view will jump
    }
  }

  handleClickApprove = (orderRef) => {
    this.setState({
      status: 'open',
      action: 'approve',
      title: 'approved'
    })

    this.handleSubmit(orderRef)
  }

  handleClickDecline = (orderRef) => {
    this.setState({
      status: 'open',
      action: 'decline',
      title: 'declined'
    })

    this.handleSubmit(orderRef)
  }

  handleClickContacted = (orderRef) => {
    this.setState({
      status: 'open',
      action: 'contact',
      title: 'contacted'
    })

    this.handleSubmit(orderRef)
  }

  handleToggleForm = () => {
    this.setState({
      status: 'closed',
      action: '',
      noteValue: ''
    })
  }

  handleNoteChange = (event) => {
    this.setState({
      noteValue: event.target.value
    })
  }

  handleSubmit = (orderRef) => {
    if (this.state.status !== 'open') {
      return;
    }
    const noteObj = {
      order_reference: orderRef,
      content: this.state.noteValue
    }

    this.props.updateOrderCallback(noteObj, orderRef, this.state.action)
    this.setState({
      status: 'closed',
      action: '',
      noteValue: ''
    })

  }

  handleShortcutSubmit = (keyName, e, handle) => {
    // Handles all actions and submits the action
    if (keyName === 'shift+return'){
      this.handleSubmit(this.props.orderRef)
    }
  }

  handleKeyboardOpen = (keyName, e, handle) => {
    switch(keyName) {
        case 'shift+a':
          this.setState({
            status: 'open',
            action: 'contact',
            title: 'contacted'
          });
          break;
        case 'shift+d':
          this.setState({
            status: 'open',
            action: 'decline',
            title: 'declined'
          });
          break;
        case 'shift+c':
          this.setState({
            status: 'open',
            action: 'contact',
            title: 'contacted'
          });
          break;
    }
  }

  render() {
    const stateClass = this.state.status
    const actionClass = this.state.action

    return(
      <div className={'sticky-actions sticky-actions-' + stateClass + ' sticky-actions-' + actionClass}>
        <div className='sticky-actions-overlay' onClick={this.handleToggleForm}></div>
        <div className="stickyActions-form">
          <div className="stickyActions-form-title">
            <h3 className='h3'>{this.state.title}</h3>
          </div>
          <textarea
            className="form-control stickyActions-comment"
            rows="2"
            onChange={this.handleNoteChange}
            placeholder="Enter Note..."
            value={this.state.noteValue}
            ref={(input) => { this.textArea = input; }}
            ></textarea>
        </div>
        <div className="stickyActions-controls">
          <div className="stickyActions-details">
            <div className="stickyActions-orderRef heading2">{this.props.orderRef}</div>
            <div className="stickyActions-meta">
              <Moment
                date={'2017-12-01T12:34:38.934712'}
                format="ddd Do MMM YYYY" />
            </div>
          </div>
          <div className="stickyActions-cta">
            <Hotkeys
              keyName="shift+return"
              onKeyUp={this.handleShortcutSubmit}>
              <Hotkeys
                keyName="shift+x"
                onKeyUp={this.handleToggleForm}>
                <button
                  className="button btn-cancel"
                  onClick={this.handleToggleForm}>
                  Cancel
                </button>
              </Hotkeys>
              <Hotkeys
                keyName="shift+a"
                onKeyDown={this.handleKeyboardOpen}>
                <button
                  className="button btn-approve"
                  onClick={() => {this.handleClickApprove(this.props.orderRef)}}>
                  Approve
                </button>
              </Hotkeys>
              <Hotkeys
                keyName="shift+d"
                onKeyUp={this.handleKeyboardOpen}>
                <button className="button btn-decline"
                  onClick={() => {this.handleClickDecline(this.props.orderRef)}}>
                  Decline
                </button>
              </Hotkeys>
              <Hotkeys
                keyName="shift+c"
                onKeyUp={this.handleKeyboardOpen}>
                <button
                  className="button btn-contacted"
                  onClick={() => {this.handleClickContacted(this.props.orderRef)}}>
                  Contacted
                </button>
              </Hotkeys>
            </Hotkeys>
          </div>
        </div>
      </div>
    )
  }
}


StickyActions.propTypes = {
  data: PropTypes.object,
  orderRef: PropTypes.string
}