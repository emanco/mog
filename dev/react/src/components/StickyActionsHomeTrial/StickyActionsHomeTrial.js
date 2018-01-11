import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Hotkeys from 'react-hot-keys';
import Moment from 'react-moment';

import {FormDatePicker} from '../../components/'

import './../../scss/components/stickyActions.css';
import './../../scss/components/stickyActionsHomeTrial.css';

export default class StickyActionsHomeTrial extends Component {

  constructor(props) {
    super(props)

    this.handleClickUpdateDate = this.handleClickUpdateDate.bind(this)
    this.handleClickUpdateStatus = this.handleClickUpdateStatus.bind(this)

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

  handleClickUpdateDate = (orderRef) => {
    this.setState({
      status: 'open',
      action: 'updateDate',
      title: 'Update Date'
    })

    this.handleSubmit(orderRef)
  }

  handleClickUpdateStatus = (orderRef) => {
    this.setState({
      status: 'open',
      action: 'statusChange',
      title: 'Change Status'
    })

    this.handleSubmit(orderRef)
  }

  handleToggleForm = () => {
    this.textArea.blur();
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
    return // @TODO - Temp while I work

    // taking advtange of the react flow here. Even though
    // we set status to be open, it isn't until the cycle is
    // complete so this will be false and it won't attempt to
    // post ont he first click. There may be a better way
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
            action: 'approve',
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
      default:
        return;
    }
  }

  render() {
    const stateClass = this.state.status
    const actionClass = this.state.action

    return(
      <div className={'sticky-actions-homeTrial sticky-actions-' + stateClass + ' sticky-actions-' + actionClass}>
        <div className='sticky-actions-overlay' onClick={this.handleToggleForm}></div>
        <div className="stickyActions-form">
          <div className="stickyActions-form-title">
            <h3 className='h3'>{this.state.title}</h3>
          </div>
          <FormDatePicker/>
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
                keyName="shift+escape"
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
                  className="button btn-updateDate"
                  onClick={() => {this.handleClickUpdateDate(this.props.orderRef)}}>
                  Update Date
                </button>
              </Hotkeys>
              <Hotkeys
                keyName="shift+d"
                onKeyUp={this.handleKeyboardOpen}>
                <button className="button btn-updateStatus"
                  onClick={() => {this.handleClickUpdateStatus(this.props.orderRef)}}>
                  Change Status
                </button>
              </Hotkeys>
            </Hotkeys>
          </div>
        </div>
      </div>
    )
  }
}


StickyActionsHomeTrial.propTypes = {
  data: PropTypes.object,
  orderRef: PropTypes.string
}