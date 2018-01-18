import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import {OrderList, CustomerInfo, CustomerOrderList, StickyBar, StickyActions, SelectBox } from '../../components';

import fraudFilterValues from '../../constants/fraudFilterValues';

import './../../scss/components/fraudCheckOverview.css';

@connect(
  (state, ownProps) => ({
    data: state.fraudCheckOverviewReducer.payload,
    orderData: state.fraudCheckOverviewReducer.orderPayload,
    orderLoading: state.fraudCheckOverviewReducer.orderLoading,
    listLoading: state.fraudCheckOverviewReducer.loading,
    currentlyViewedOrder: state.fraudCheckOverviewReducer.currentOrderRef,
    currentOrderDate: state.fraudCheckOverviewReducer.currentOrderDate,
    fraudStatus: state.fraudCheckOverviewReducer.fraudStatus
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

  constructor(props) {
    super(props)
    this.handleUpdateOrder = this.handleUpdateOrder.bind(this)
    this.handleFraudStatus = this.handleFraudStatus.bind(this)
    this.handleFraudCheckListClick = this.handleFraudCheckListClick.bind(this)

    this.state = {
      paginationPage: 0
    }
  }

  componentDidMount() {
    this.props.getFraudCheckList({status: 'FRAUD CHECK NOT CHECKED'});
    console.log(this.props.data)
  }

  handleFraudStatus = (value) => {
    this.props.upateFilter(value)
    this.props.getFraudCheckList({
      status: value,
      limit: 20
    })
  }

  handleFraudCheckListClick = (orderRef, custId, key) => {
    if (orderRef !== this.props.data.results[0].order_reference) {
      let order = this.props.data.results[key]; // get the order using the array key we've been passed
      this.props.getFraudCheckListOrder(orderRef, custId, this.props.data.results[key]);
    }
  }

  handleFilterChange = (filterName) => {
    // Call Action to go update the view.
    this.props.getFraudCheckList({
      [filterName] : true,
      status : this.props.fraudStatus
    })
  }

  handlePaginationChange = (page) => {

    this.props.getFraudCheckList({
      offset: page * 20,
      limit: 20
    })

    this.setState({
      paginationPage: page
    });
  }

  handleUpdateOrder = (noteObj, orderId, actionType) => {
    this.props.updateOrderStatus(noteObj, orderId, actionType, this.props.fraudStatus)
  }

  handleDeclineOrder = (orderId) => {
    this.props.declineOrder(orderId)
  }

  render() {
    console.log(this.props.currentOrderDate)
    //const overlay = this.state.overlay
    if (!this.props.data.results || !this.props.orderData) {
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
            filterListCallback={this.handleFraudStatus }/>
          <div className="fraudCheckOverview">
            <div className={"left-panel " + listLoadingClass}>
              <div className="fraudCheckOverview-meta">
                <div className="fraudCheckOverview-count">{this.props.data.count} Items</div>

                <SelectBox
                  options={fraudFilterValues}
                  handleChange={this.handleFilterChange}
                  placeholder='Filter by'
                  />
              </div>
              {this.props.data.count < 1 && <h3 className='h3'>No Results</h3>}
              <OrderList
                data={this.props.data}
                hoverCallback={this.handleFraudCheckListClick}
                handlePaginationChange={this.handlePaginationChange}/>
            </div>
            <div className={"right-panel -light-inset cust-scroll fraudCheckOverview-order " + orderLoadingClass}>
            {this.props.data.results[0] &&
            <div className="fraudCheck-right-wrap">
              <div className="fraudCheckOverview-right-inner">
              <CustomerInfo
                customerid={this.props.data.results[0].customer_reference}
                data={this.props.orderData[0].data}/>

              <CustomerOrderList
                data={this.props.orderData[1].data}
                customerid={this.props.data.results[0].customer_reference} />
              </div>
              <StickyActions currentOrderDate={this.props.currentOrderDate} loadingStatus={this.props.orderLoading} orderRef={this.props.currentlyViewedOrder} updateOrderCallback={this.handleUpdateOrder} declineCallback={this.handleDeclineOrder} />
              </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }
}