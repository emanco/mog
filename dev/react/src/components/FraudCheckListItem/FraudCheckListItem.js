import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'

import {clientNameMapping, fraudCheckStatus} from '../../helpers/mappings'

import './../../scss/components/fraudCheckListItem.css';

export default class fraudCheckList extends Component {

  constructor(props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  componentDidMount() {
  }

  handleOnClick = () => {
    console.log('Click')
  }

  handleOnHover = () => {
    console.log('Hover')
  }



  render() {
    // ADD CLASSES FROM THE GRID
    const statusClass = fraudCheckStatus(this.props.data.latest_fraud_status);
    return(
      <div className="row component">
        <div className={'fraudCheck-'+ statusClass + ' col-sm-12 fraudCheckListItem'} onClick={this.handleOnClick} onMouseOver={this.handleOnHover}>
          <p className="heading2">{this.props.data.order_reference}</p>
          {clientNameMapping(this.props.data.client_id)}
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