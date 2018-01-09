import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'
import { Link } from 'react-router'

import {clientNameMapping, fraudCheckStatus} from '../../helpers/mappings'

import './../../scss/components/fraudCheckListItem.css';

export default class fraudCheckList extends Component {

  constructor(props) {
    super(props)
    this.handleItemOnClick = this.handleItemOnClick.bind(this)
  }

  handleItemOnClick = () => {
    this.props.itemClickCallback(this.props.data.order_reference);
  }


  render() {
    // ADD CLASSES FROM THE GRID
    const statusClass = fraudCheckStatus(this.props.data.status);
    return(
      <div className="row component fraudCheckListItemContain">
        <div className={'fraudCheck-'+ statusClass + ' col-xs-12 fraudCheckListItem'} onClick={this.handleItemOnClick}>
          <div className="fraudCheckListItem-details">
            <p className="heading2"><Link to='/customers/CUS123456789'>{this.props.data.order_reference}</Link></p>
            {clientNameMapping(this.props.data.client_id)}
          </div>
          {this.props.data.fraud &&
          <div className="fraudCheck-status-icons">
            {this.props.data.fraud.is_postcode_blacklisted && <Icon title="Email Blacklisted" className='fraudCheckListItem-flagIcon' icon='ion-at' />}
            {this.props.data.fraud.is_first_order && <Icon title="First Order" className='fraudCheckListItem-flagIcon' icon='ion-person-add' />}
            {this.props.data.fraud.is_email_blacklisted && <Icon title="Postcode Blacklisted" className='fraudCheckListItem-flagIcon' icon='ion-home' />}
          </div>
            }
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