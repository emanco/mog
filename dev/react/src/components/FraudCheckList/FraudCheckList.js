import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import getUrlParam from '../../helpers/getUrlParam'

import {FraudCheckListItem} from '../../components'
import {Pagination} from '../../components'

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
  /*
  *   Array of orders to be displayed in the list
  */
  data: PropTypes.object
}