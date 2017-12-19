import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import FraudCheckList from '../../components/FraudCheckList/FraudCheckList'
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderList from '../../components/CustomerOrderList/CustomerOrderList';
import StickyBar from '../../components/StickyBar/StickyBar';
import StickyActions from '../../components/StickyActions/StickyActions';

import getUrlParam from '../../helpers/getUrlParam'

import './../../scss/components/fraudCheckOverview.css';

@connect(
  (state, ownProps) => ({
    data: state.fraudCheckOverviewReducer.payload,
    orderData: state.fraudCheckOverviewReducer.orderPayload,
    orderLoading: state.fraudCheckOverviewReducer.orderLoading,
    listLoading: state.fraudCheckOverviewReducer.loading,
    currentlyViewedOrder: state.fraudCheckOverviewReducer.currentOrderRef
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

  constructor(props) {
    super(props)
    this.handleFraudCheckListHover = this.handleFraudCheckListHover.bind(this)
    this.handleApproveOrder = this.handleApproveOrder.bind(this)
  }

  componentDidMount() {
    this.props.getFraudCheckList();
  }

  handleFraudCheckListHover = (orderRef) => {
    // Check we're not already displaying the order
    if (orderRef !== this.props.data[0].results[0].order_reference) {
      this.props.getFraudCheckListOrder('CUS123456789');
    }
  }

  handleFraudFilterting = (value) => {
    this.props.getFraudCheckList({
      status: value
    })
  }

  handlePaginationChange = (page) => {
    console.log('MAKE AN API CALL FOR PAGINATION');
    console.log('Page Requested: ' + page)
    const offset = getUrlParam(this.props.data[0].next, 'offset')
    this.props.getFraudCheckList({
      offset: offset
    })
  }

  handleApproveOrder = (orderId) => {
    this.props.approveOrder(orderId)
  }

  handleDeclineOrder = (orderId) => {
    this.props.declineOrder(orderId)
  }

  render() {
    if (!this.props.data[0] || !this.props.orderData) {
      return (
        <div>
          <StickyBar
            path={this.props.location.pathname}/>
          <div>LOADING...</div>
        </div>)
    } else {
      const orderLoadingClass = this.props.orderLoading ? '-loading' : '';
      const listLoadingClass = this.props.listLoading ? '-loading' : '';
      return(
        <div>
          <StickyBar
            path={this.props.location.pathname}
            filterListCallback={() => this.handleFraudFiltering }/>
          <div className="fraudCheckOverview">
            <div className={"left-panel " + listLoadingClass}>
              <div>{this.props.data[0].count} Items</div>
              <FraudCheckList
                data={this.props.data[0]}
                hoverCallback={this.handleFraudCheckListHover}
                handlePaginationChange={this.handlePaginationChange}/>
            </div>
            <div className={"right-panel -light-inset cust-scroll fraudCheckOverview-order " + orderLoadingClass}>
              <div className="fraudCheckOverview-right-inner">
              <CustomerInfo
                customerid={this.props.data[0].results[0].customer_reference}
                data={this.props.orderData[0].data}/>

              <CustomerOrderList
                data={this.props.orderData[1].data[0]}
                customerid={this.props.data[0].results[0].customer_reference} />
              </div>
              <StickyActions orderRef={this.props.currentlyViewedOrder} approveCallback={this.handleApproveOrder} declineCallback={this.handleDeclineOrder} />
            </div>
          </div>
        </div>
      )
    }
  }
}