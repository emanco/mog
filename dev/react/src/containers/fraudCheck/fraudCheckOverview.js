import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import FraudCheckList from '../../components/FraudCheckList/FraudCheckList'
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderList from '../../components/CustomerOrderList/CustomerOrderList';
import StickyBar from '../../components/StickyBar/StickyBar';
import StickyActions from '../../components/StickyActions/StickyActions';
import SelectBox from '../../components/SelectBox/SelectBox';

import fraudStatusValues from '../../constants/fraudStatusValues';
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
    fraudStatus: state.fraudCheckOverviewReducer.fraudStatus
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

  constructor(props) {
    super(props)
    this.handleUpdateOrder = this.handleUpdateOrder.bind(this)
    this.handleFraudStatus = this.handleFraudStatus.bind(this)

    this.state = {
      paginationPage: 0
    }
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

  handleFraudStatus = (value) => {
    this.props.upateFilter(value)
    this.props.getFraudCheckList({
      status: value,
      limit: 20
    })
  }

  handleFilterChange = (filterName) => {
    // Call Action to go update the view.
    this.props.getFraudCheckList({
      [filterName] : true,
      status : this.props.fraudStatus
    })
  }

  handlePaginationChange = (page, direction) => {
    const offset = getUrlParam(this.props.data.next, 'offset')

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
              <FraudCheckList
                data={this.props.data}
                hoverCallback={this.handleFraudCheckListHover}
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
              <StickyActions loadingStatus={this.props.orderLoading} orderRef={this.props.currentlyViewedOrder} updateOrderCallback={this.handleUpdateOrder} declineCallback={this.handleDeclineOrder} />
              </div>
              }
            </div>
          </div>
        </div>
      )
    }
  }
}