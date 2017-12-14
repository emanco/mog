import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import getUrlParam from '../../helpers/getUrlParam'

import FraudCheckListItem from '../../components/FraudCheckListItem/FraudCheckListItem'
import Pagination from '../../components/Pagination/Pagination'

export default class FraudCheckList extends Component {

  constructor(props) {
    super(props)
    this.handleHoverCallback = this.handleHoverCallback.bind(this)
  }

  handleHoverCallback = (orderRef) => {
    this.props.hoverCallback(orderRef);
  }

  handlePaginationChange = (page) => {
    this.props.handlePaginationChange(page);
  }

  render() {
    const pageCount = Math.floor(this.props.data.count / getUrlParam(this.props.data.next, 'limit'));
    return(
      <div>
        {
          this.props.data.results.map((result, i) => {
            return (<FraudCheckListItem data={result} key={i} hoverCallback={this.handleHoverCallback}/>)
          })
        }
        <Pagination pageCount={pageCount} handlePaginationChange={this.handlePaginationChange} />
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