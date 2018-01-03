import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import FraudCheckList from '../../components/FraudCheckList/FraudCheckList'
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderList from '../../components/CustomerOrderList/CustomerOrderList';
import StickyBar from '../../components/StickyBar/StickyBar';
import StickyActions from '../../components/StickyActions/StickyActions';
import fraudFilterValues from '../../constants/fraudFilterValues';
import getUrlParam from '../../helpers/getUrlParam'

import './../../scss/components/fraudCheckOverview.css';

@connect(
  (state, ownProps) => ({
    data: state.fraudCheckOverviewReducer.payload,
    orderData: state.fraudCheckOverviewReducer.orderPayload,
    orderLoading: state.fraudCheckOverviewReducer.orderLoading,
    listLoading: state.fraudCheckOverviewReducer.loading,
    currentlyViewedOrder: state.fraudCheckOverviewReducer.currentOrderRef,
    fraudFilter: state.fraudCheckOverviewReducer.fraudFilter
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

  constructor(props) {
    super(props)
    this.handleFraudCheckListHover = this.handleFraudCheckListHover.bind(this)
    this.handleUpdateOrder = this.handleUpdateOrder.bind(this)
    this.handleFraudFiltering = this.handleFraudFiltering.bind(this)
  }

  componentDidMount() {
    this.props.getFraudCheckList({status: 'FRAUD CHECK NOT CHECKED'});
  }

  handleFraudCheckListHover = (orderRef) => {
    // Check we're not already displaying the order
    if (orderRef !== this.props.data.results[0].order_reference) {
      this.props.getFraudCheckListOrder('CUS123456789');
    }
  }

  handleFraudFiltering = (value) => {
    console.log(value)
    this.props.upateFilter(value)
    this.props.getFraudCheckList({
      status: value,
      limit: 20
    })
  }

  handlePaginationChange = (page, direction) => {
    console.log('MAKE AN API CALL FOR PAGINATION');
    console.log('Page Requested: ' + page)
    const offset = getUrlParam(this.props.data.next, 'offset')
    console.log(offset)
    this.props.getFraudCheckList({
      offset: offset,
      limit: 20
    })
  }

  handleUpdateOrder = (noteObj, orderId, actionType) => {
    console.log('APPROVE ORDER IN OVERVIEW')
    console.log(noteObj)
    console.log(this.props.fraudFilter)
    this.props.updateOrderStatus(noteObj, orderId, actionType, this.props.fraudFilter)
  }

  handleDeclineOrder = (orderId) => {
    this.props.declineOrder(orderId)
  }

  render() {
    //const overlay = this.state.overlay
    if (!this.props.data || !this.props.orderData) {
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
            filterListCallback={this.handleFraudFiltering }/>
          <div className="fraudCheckOverview">
            <div className={"left-panel " + listLoadingClass}>
              <div>{this.props.data.count} Items</div>
              <FraudCheckList
                data={this.props.data}
                hoverCallback={this.handleFraudCheckListHover}
                handlePaginationChange={this.handlePaginationChange}/>
            </div>
            <div className={"right-panel -light-inset cust-scroll fraudCheckOverview-order " + orderLoadingClass}>
              <div className="fraudCheckOverview-right-inner">
              <CustomerInfo
                customerid={this.props.data.results[0].customer_reference}
                data={this.props.orderData[0].data}/>

              <CustomerOrderList
                data={this.props.orderData[1].data[0]}
                customerid={this.props.data.results[0].customer_reference} />
              </div>
              <StickyActions loadingStatus={this.props.orderLoading} orderRef={this.props.currentlyViewedOrder} updateOrderCallback={this.handleUpdateOrder} declineCallback={this.handleDeclineOrder} />
            </div>
          </div>
        </div>
      )
    }
  }
}