import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

import './../../scss/components/stickyActions.css';

export default class StickyActions extends Component {

  constructor(props) {
    super(props)
    this.handleApprove = this.handleApprove.bind(this)
    this.handleDecline = this.handleDecline.bind(this)
  }

  handleApprove = (orderRef) => {
    console.log('APPROVE ORDER');
    this.props.approveCallback(orderRef)
  }

  handleDecline = (orderRef) => {
    console.log('APPROVE ID');
    this.props.declineCallback(orderRef)
  }

  render() {
    console.log(this.props.orderRef)
    return(
      <div className="sticky-actions">
        <div className="stickyActions-details">
          <div className="stickyActions-orderRef heading2">{this.props.orderRef}</div>
          <div className="stickyActions-meta"><Moment date={'2017-12-01T12:34:38.934712'} format="ddd Do MMM YYYY" /></div>
        </div>
        <div className="stickyActions-cta">
          <button className="button btn-approve" onClick={() => {this.handleApprove(this.props.orderRef)}}>Approve</button>
          <button className="button btn-decline" onClick={() => {this.handleDecline(this.props.orderRef)}}>Decline</button>
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