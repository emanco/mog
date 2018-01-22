import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon/Icon'
import { Link } from 'react-router'
import Moment from 'react-moment'

import {homeTrialStatus} from '../../helpers/mappings'

import './../../scss/components/homeTrialListItem.css'

export default class HomeTrialListItem extends Component {

  constructor(props) {
    super(props)
    this.handleItemOnClick = this.handleItemOnClick.bind(this)
    this.handleIconDisplay = this.handleIconDisplay.bind(this)
  }

  handleItemOnClick = () => {
    this.props.itemClickCallback(
      this.props.data.order_reference,
      this.props.data.customer_reference,
      this.props.orderKey
    );
  }

  handleIconDisplay = () => {
    // Loop through chargeable_reasons and set each true or false
    if (!this.props.data.hometrial) {
      return false; // same data lacks the above so return if so
    }

    const chargeableReasons = this.props.data.hometrial.chargeable_reasons

    const icons = {
      damaged: false,
      missing: false,
      chargeable_reasons: false
    };

    for (let i = 0; i < chargeableReasons.length; i += 1 ) {
      switch(chargeableReasons[i]) {
        case 'damaged':
          icons.damaged = true;
          break;
        case 'missing':
          icons.missing = true;
          break;
        case 'charge_overdue':
          icons.overdue = true;
          break;
      }
    }

    return icons;
  }


  render() {
    // ADD CLASSES FROM THE GRID
    const statusClass = homeTrialStatus(this.props.data.status);
    const iconDisplay = this.handleIconDisplay();
    return(
      <div className="row component orderListItemContain">
        <div className={'homeTrialListItem-'+ statusClass + ' col-xs-12 orderListItem'} onClick={this.handleItemOnClick}>
          <div className="orderListItem-details">
            <h2 className="heading2"><Link to={'/customers/'+this.props.data.customer_reference}>{this.props.data.order_reference}</Link></h2>
            Client: {this.props.data.client_id} | Order Date: <Moment date={this.props.data.placed_at} format="ddd Do MMM YYYY" />
          </div>
          {this.props.data.hometrial &&
          <div className="orderList-status-icons">
            {iconDisplay.damaged && <Icon title="Damaged" className='orderListItem-flagIcon' icon='ion-wrench' />}
            {iconDisplay.missing && <Icon title="Missing" className='orderListItem-flagIcon' icon='ion-help' />}
            {iconDisplay.overdue && <Icon title="Charge Overdue" className='orderListItem-flagIcon' icon='ion-social-usd' />}
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