import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'

import Icon from '../Icon/Icon'

import {clientNameMapping, fraudCheckStatus} from '../../helpers/mappings'

import './../../scss/components/fraudCheckListItem.css';

export default class fraudCheckList extends Component {

  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.timeOut = undefined;
  }

  componentDidMount() {
  }

  handleOnClick = () => {
    window.location = 'http://localhost:3000/customers/CUS123456789'
  }

  handleOnMouseLeave = () => {
    clearTimeout(this.timeOut);
  }

  handleOnMouseEnter = () => {
    this.timeOut = setTimeout(() => {
        this.props.hoverCallback(this.props.data.order_reference);
      }, 1000)
  }

  checkFlags = () => {

  }



  render() {
    // ADD CLASSES FROM THE GRID
    const statusClass = fraudCheckStatus(this.props.data.latest_fraud_status);
    return(
      <div className="row component fraudCheckListItemContain loads">
        <div className={'fraudCheck-'+ statusClass + ' col-xs-12 fraudCheckListItem'} onClick={this.handleOnClick} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
          <div className="fraudCheckListItem-details">
            <p className="heading2">{this.props.data.order_reference}</p>
            {clientNameMapping(this.props.data.client_id)}
          </div>
          <div className="fraudCheck-status-icons">
            {this.props.data.fraud.is_postcode_blacklisted && <Icon className='fraudCheckListItem-flagIcon' icon='ion-at' />}
            {this.props.data.fraud.is_first_order && <Icon className='fraudCheckListItem-flagIcon' icon='ion-person-add' />}
            {this.props.data.fraud.is_email_blacklisted && <Icon className='fraudCheckListItem-flagIcon' icon='ion-home' />}
          </div>
        </div>
      </div>
    )

  }
}


fraudCheckList.propTypes = {
  /*
  *   Array of orders to be displayed in the list
  */
  data: PropTypes.object
}