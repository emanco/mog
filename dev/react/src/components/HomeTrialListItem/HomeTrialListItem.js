import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'
import { Link } from 'react-router'
import Moment from 'react-moment'

import {clientNameMapping, homeTrialStatus} from '../../helpers/mappings'

import './../../scss/components/homeTrialListItem.css';

export default class HomeTrialListItem extends Component {

  constructor(props) {
    super(props)
    this.handleItemOnClick = this.handleItemOnClick.bind(this)
  }

  handleItemOnClick = () => {
    this.props.itemClickCallback(this.props.data.order_reference, this.props.data.customer_reference, this.props.orderKey);
  }


  render() {
    // ADD CLASSES FROM THE GRID
    const statusClass = homeTrialStatus(this.props.data.status);
    return(
      <div className="row component orderListItemContain">
        <div className={'homeTrialListItem-'+ statusClass + ' col-xs-12 orderListItem'} onClick={this.handleItemOnClick}>
          <div className="orderListItem-details">
            <p className="heading2"><Link to={'/customers/'+this.props.data.customer_reference}>{this.props.data.order_reference}</Link></p>
            Client: {this.props.data.client_id} | Order Date: <Moment date={this.props.data.placed_at} format="ddd Do MMM YYYY" />
          </div>
          {this.props.data.fraud &&
          <div className="orderList-status-icons">
            {this.props.data.fraud.is_postcode_blacklisted && <Icon title="Email Blacklisted" className='orderListItem-flagIcon' icon='ion-at' />}
            {this.props.data.fraud.is_first_order && <Icon title="First Order" className='orderListItem-flagIcon' icon='ion-person-add' />}
            {this.props.data.fraud.is_email_blacklisted && <Icon title="Postcode Blacklisted" className='orderListItem-flagIcon' icon='ion-home' />}
          </div>
            }
            <div className="homeTrialList-status">
              {this.props.data.status}
            </div>
        </div>
      </div>
    )

  }
}


HomeTrialListItem.propTypes = {
  /*
  *   Array of orders to be displayed in the list
  */
  data: PropTypes.object
}