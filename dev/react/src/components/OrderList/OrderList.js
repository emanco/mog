import React, { Component } from 'react'
import PropTypes from 'prop-types'

import getUrlParam from '../../helpers/getUrlParam'

import {Pagination, FraudCheckListItem, HomeTrialListItem} from '../../components'

import './../../scss/components/orderList.css'

export default class OrderList extends Component {
  constructor(props) {
    super(props)
    this.handleOnItemClickCallback = this.handleOnItemClickCallback.bind(this)
  }

  childComponents = {
    FraudCheckList: FraudCheckListItem,
    HomeTrial: HomeTrialListItem
  }

  handleOnItemClickCallback = (orderRef, custId, key) => {
    this.props.hoverCallback(orderRef, custId, key);
  }

  handlePaginationChange = (page) => {
    this.props.handlePaginationChange(page);
  }

  calculatePagination = () => {
    if (this.props.data.next !== null) {
      return Math.floor(this.props.data.count / getUrlParam(this.props.data.next, 'limit'));
    }
  }

  render() {
    console.log(this.props.paginationPage)
    const pageCount = this.calculatePagination(this.props.data.next);
    const ListItem = this.childComponents[this.props.listType || 'FraudCheckList']
    return(
      <div className="orderList">
        {
          this.props.data.results.map((result, i) => {
            return (<ListItem data={result} key={i} orderKey={i} itemClickCallback={this.handleOnItemClickCallback}/>)
          })
        }
        {pageCount && <Pagination pageCount={pageCount} handlePaginationChange={this.handlePaginationChange} currentPage={this.props.paginationPage} />}
      </div>
    )
  }
}

OrderList.propTypes = {
  data: PropTypes.object,
  handlePaginationChange: PropTypes.func,
  handleOnItemClickCallback: PropTypes.func,
  hoverCallback: PropTypes.func,
  listType: PropTypes.string
}