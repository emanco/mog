import React, { Component } from 'react'
import PropTypes from 'prop-types'

import getUrlParam from '../../helpers/getUrlParam'

import {FraudCheckListItem, Pagination} from '../../components'

export default class FraudCheckList extends Component {

  constructor(props) {
    super(props)
    this.handleOnItemClickCallback = this.handleOnItemClickCallback.bind(this)
  }

  handleOnItemClickCallback = (orderRef) => {
    this.props.hoverCallback(orderRef);
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
    const pageCount = this.calculatePagination(this.props.data.next);
    return(
      <div>
        {
          this.props.data.results.map((result, i) => {
            return (<FraudCheckListItem data={result} key={i} itemClickCallback={this.handleOnItemClickCallback}/>)
          })
        }
        {pageCount && <Pagination pageCount={pageCount} handlePaginationChange={this.handlePaginationChange} />}
      </div>
    )
  }
}


FraudCheckList.propTypes = {

  data: PropTypes.object,
  /*
    Data - Holds all data used in the render method. It should be an object and is required
    or this component will fail
  */
}