import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './../../scss/components/stickyActions.css';

export default class StickyActions extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="sticky-actions">
        <div className="stickyActions-details">
          <span className="stickyActions-orderRef">{this.props.orderRef}</span>
          <span className="stickyActions-meta"></span>
        </div>
        <div className="stickyActions-cta">
          <button className="button btn-approve">Approve</button>
          <button className="button btn-decline">Decline</button>
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