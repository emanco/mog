import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import FraudCheckList from '../../components/FraudCheckList/FraudCheckList'
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderList from '../../components/CustomerOrderList/CustomerOrderList';

import './../../scss/components/fraudCheckOverview.css';

@connect(
  (state, ownProps) => ({
    data: state.fraudCheckOverviewReducer.payload,
    orderData: state.fraudCheckOverviewReducer.orderPayload
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.props.getFraudCheckList();
    }

  render() {

    if (!this.props.data[0] || !this.props.orderData) {
      return (<div>LOADING...</div>)
    } else {
      console.log(this.props.orderData)
      return(
        <div className="fraudCheckOverview">
        <div className="left-panel">
          <div>{this.props.data[0].count} Items</div>
          <FraudCheckList data={this.props.data[0]} />
        </div>
        <div className="right-panel cust-scroll">
          <CustomerInfo customerid={this.props.data[0].results[0].customer_reference} data={this.props.orderData[0].data}/>
          <CustomerOrderList data={this.props.orderData[1].data[0]} customerid={this.props.data[0].results[0].customer_reference} />
        </div>
        </div>
      )
    }
  }
}