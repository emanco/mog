import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

import './../../scss/components/stickyActions.css';

export default class StickyActions extends Component {

  constructor(props) {
    super(props)

    this.handleClickApprove = this.handleClickApprove.bind(this)
    this.handleClickDecline = this.handleClickDecline.bind(this)

    this.handleNoteChange = this.handleNoteChange.bind(this);

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
      }, 200)
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
      action: ''
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
          <textarea className="form-control stickyActions-comment" rows="2" onChange={this.handleNoteChange} placeholder="Enter Note" value={this.state.noteValue} ref={(input) => { this.textArea = input; }}></textarea>
        </div>
        <div className="stickyActions-controls">
          <div className="stickyActions-details">
            <div className="stickyActions-orderRef heading2">{this.props.orderRef}</div>
            <div className="stickyActions-meta"><Moment date={'2017-12-01T12:34:38.934712'} format="ddd Do MMM YYYY" /></div>
          </div>
          <div className="stickyActions-cta">
            <button className="button btn-cancel" onClick={() => { this.handleToggleForm()}}>Cancel</button>
            <button className="button btn-approve" onClick={() => {this.handleClickApprove(this.props.orderRef)}}>Approve</button>
            <button className="button btn-decline" onClick={() => {this.handleClickDecline(this.props.orderRef)}}>Decline</button>
            <button className="button btn-contacted" onClick={() => {this.handleClickContacted(this.props.orderRef)}}>Contacted</button>
          </div>
        </div>
      </div>
    )
  }
}


StickyActions.propTypes = {
  /*
  *   Array of orders to be displayed in the list
  */
  data: PropTypes.object
}