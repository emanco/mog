import React, { Component } from 'react';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderComponent from '../../components/CustomerOrder/CustomerOrder';
import CustomerPrescriptionComponent from '../../components/CustomerPrescriptions/CustomerPrescriptions';

import { connect } from 'react-redux';

import BreadcrumbsComponent from "../../components/Breadcrumbs/Breadcrumbs";
// import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'

@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {...SummaryActions}
)
export default class fraudCheckOrder extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

  render() {
    <div>Fraud Check Order Container</div>
  }
}