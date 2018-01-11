import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as homeTrialOverviewActions from '../../redux/modules/homeTrialOverview'
import {FraudCheckList, CustomerInfo, CustomerOrderList, StickyBar, StickyActionsHomeTrial, SelectBox, OrderList } from '../../components';

import homeTrialFilterValues from '../../constants/homeTrialFilterValues';

import './../../scss/components/fraudCheckOverview.css';

@connect(
  (state, ownProps) => ({
    data: state.homeTrialOverviewReducer.payload,
    orderData: state.homeTrialOverviewReducer.orderPayload,
    orderLoading: state.homeTrialOverviewReducer.orderLoading,
    listLoading: state.homeTrialOverviewReducer.loading,
    currentlyViewedOrder: state.homeTrialOverviewReducer.currentOrderRef,
    homeTrialStatus: state.homeTrialOverviewReducer.homeTrialStatus
  }),
  {...homeTrialOverviewActions}
)
export default class homeTrialOverview extends Component {

  constructor(props) {
    super(props)
    this.handleUpdateOrder = this.handleUpdateOrder.bind(this)
    this.handleStatus = this.handleStatus.bind(this)
    this.handleFraudCheckListClick = this.handleFraudCheckListClick.bind(this)

    this.state = {
      paginationPage: 0
    }
  }

  componentDidMount() {
    this.props.getHomeTrialList({
      'pending_review': true,
    });
  }

  handleStatus = (value) => {
    this.props.updateFilter(value)
    let params = {}

    if (value === 'pending') {
      params = {
        'pending_review': true
      }
    } else if(value === 'contacted') {
      params = {
        status: 'HT CUSTOMER CONTACTED'
      }
    }

    this.props.getHomeTrialList({
      ...params,
      limit: 20
    })
  }

  handleFraudCheckListClick = (orderRef) => {
    // Check we're not already displaying the order
    if (orderRef !== this.props.data.results[0].order_reference) {
      this.props.getHomeTrialListOrder('CUS123456789');
    }
  }

  handleFilterChange = (filterName) => {
    // Call Action to go update the view.

    let params = {
      state: this.props.homeTrialStatus
    }

    if (filterName) {
      params = {
        ...params,
        [filterName]:true
      }
    }
    this.props.getHomeTrialList(params)
  }

  handlePaginationChange = (page) => {

    this.props.getHomeTrialList({
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
    console.log(this.props.data)
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
            filterListCallback={this.handleStatus }/>
          <div className="fraudCheckOverview">
            <div className={"left-panel " + listLoadingClass}>
              <div className="fraudCheckOverview-meta">
                <div className="fraudCheckOverview-count">{this.props.data.count} Items</div>

                <SelectBox
                  options={homeTrialFilterValues}
                  handleChange={this.handleFilterChange}
                  placeholder='Filter by'
                  />
              </div>
              {this.props.data.count < 1 && <h3 className='h3'>No Results</h3>}
              <OrderList
                listType="HomeTrial"
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
                data={this.props.orderData[1].data[0]}
                customerid={this.props.data.results[0].customer_reference} />
              </div>
              <StickyActionsHomeTrial loadingStatus={this.props.orderLoading} orderRef={this.props.currentlyViewedOrder} updateOrderCallback={this.handleUpdateOrder} declineCallback={this.handleDeclineOrder} />
              </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }
}