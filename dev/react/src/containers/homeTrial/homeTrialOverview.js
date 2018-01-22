import React, { Component } from 'react'

import { connect } from 'react-redux'

import * as homeTrialOverviewActions from '../../redux/modules/homeTrialOverview'
import { CustomerInfo, CustomerOrderList, StickyBar, StickyActionsHomeTrial, SelectBox, OrderList } from '../../components'

import homeTrialFilterValues from '../../constants/homeTrialFilterValues'

import './../../scss/components/homeTrialOverview.css'

@connect(
  (state, ownProps) => ({
    data: state.homeTrialOverviewReducer.payload,
    orderData: state.homeTrialOverviewReducer.orderPayload,
    orderLoading: state.homeTrialOverviewReducer.orderLoading,
    listLoading: state.homeTrialOverviewReducer.loading,
    currentlyViewedOrder: state.homeTrialOverviewReducer.currentOrderRef,
    homeTrialStatus: state.homeTrialOverviewReducer.homeTrialStatus,
    currentOrderDate: state.homeTrialOverviewReducer.currentOrderDate,
    currentChargeDate: state.homeTrialOverviewReducer.currentOrderChargeDate,
    currentReturnDate: state.homeTrialOverviewReducer.currentOrderReturnDate
  }),
  {...homeTrialOverviewActions}
)
export default class homeTrialOverview extends Component {

  constructor(props) {
    super(props)

    this.handleUpdateDates = this.handleUpdateDates.bind(this)
    this.handleUpdateOrder = this.handleUpdateOrder.bind(this)
    this.handleStatusChange = this.handleStatusChange.bind(this)
    this.handleFraudCheckListClick = this.handleFraudCheckListClick.bind(this)
    this.dataIsAvailable = this.dataIsAvailable.bind(this)
    this.handleViewMoreCustomerOrders = this.handleViewMoreCustomerOrders.bind(this)
    this.state = {
      paginationPage: 0
    }
  }

  componentDidMount() {
    this.props.getHomeTrialList({
      'pending_review': true,
    });
  }

  handleStatusChange = (value) => {
    this.props.updateStatus(value)
    this.setState({
      paginationPage: 0
    })
  }

  handleFraudCheckListClick = (orderRef, custId, key) => {
    if (orderRef !== this.props.currentlyViewedOrder) {
      this.props.getHomeTrialListOrder(orderRef, custId, this.props.data.results[key]);
    }
  }

  handleFilterChange = (filterValue) => {
    // Call Action to go update the view.
    this.props.updateFilter(filterValue)
    this.setState({
      paginationPage: 0
    })
  }

  handlePaginationChange = (page) => {
    this.props.getHomeTrialListPaginated({
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

  handleUpdateDates = (note, dates) => {
    this.props.handleUpdateDates(note,dates)
  }

  handleViewMoreCustomerOrders = () => {
    this.props.loadMoreCustomerOrders(this.props.data.results[0].customer_reference)
  }

  dataIsAvailable = () => {
    if (this.props.data.results) {
      if (this.props.data.results.length > 0 && this.props.orderData) {
        if (this.props.orderData[0]) {
          return true
        }
      }
    }

    return false;
  }

  render() {

    const render = this.dataIsAvailable();

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
            filterListCallback={this.handleStatusChange }/>
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
             {render && <OrderList
                listType="HomeTrial"
                data={this.props.data}
                hoverCallback={this.handleFraudCheckListClick}
                handlePaginationChange={this.handlePaginationChange}
                paginationPage={this.state.paginationPage}
                />}
            </div>
            <div className={"right-panel -light-inset cust-scroll fraudCheckOverview-order " + orderLoadingClass}>
            {render &&
            <div className="fraudCheck-right-wrap">
              <div className="fraudCheckOverview-right-inner">
              <CustomerInfo
                customerid={this.props.data.results[0].customer_reference}
                data={this.props.orderData[0].data}/>

              <CustomerOrderList
                data={this.props.orderData[1].data}
                customerid={this.props.data.results[0].customer_reference}
                viewMoreCallback={this.handleViewMoreCustomerOrders}
              />
              </div>
              <StickyActionsHomeTrial
                loadingStatus={this.props.orderLoading}
                orderRef={this.props.currentlyViewedOrder}
                updateOrderCallback={this.handleUpdateOrder}
                declineCallback={this.handleDeclineOrder}
                currentOrderDate={this.props.currentOrderDate}
                currentChargeDate={this.props.currentChargeDate}
                currentReturnDate={this.props.currentReturnDate}
                updateDatesCallback={this.handleUpdateDates}
                />
              </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }
}