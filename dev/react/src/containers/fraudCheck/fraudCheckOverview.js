import React, { Component } from 'react';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderComponent from '../../components/CustomerOrder/CustomerOrder';
import CustomerPrescriptionComponent from '../../components/CustomerPrescriptions/CustomerPrescriptions';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'

@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

  render() {
    <div>Fraud Check Overview Container</div>
  }
}