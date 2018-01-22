import React, { Component } from 'react';
import PropTypes from 'prop-types'

import ReactPaginate from 'react-paginate';

import './../../scss/components/pagination.css';

export default class Pagination extends Component {

  handlePageChange = (data) => {
    this.props.handlePaginationChange(data.selected)
  }

  render() {
    return(
        <ReactPaginate
          containerClassName={this.props.containerClassName}
          subContainerClassName={this.props.subContainerClassName}
          activeClassName={this.props.activeClassName}
          pageRangeDisplayed={this.props.pageRangeDisplayed}
          pageCount={this.props.pageCount}
          marginPagesDisplayed={this.props.marginPagesDisplayed}
          onPageChange={this.handlePageChange}
          forcePage={this.props.currentPage}
      />
    )
  }
}

Pagination.propTypes = {
  containerClassName: PropTypes.string,
  subContainerClassNam: PropTypes.string,
  activeClassName: PropTypes.string,
  pageRangeDisplayed: PropTypes.number, // zero indexed so 4 will display 1 to 5
  pageCount: PropTypes.number, // total number of pages available
  marginPagesDisplayed: PropTypes.number // pages not in the rangeDisplayed you wish to show
}

Pagination.defaultProps = {
  pageRangeDisplayed: 4,
  pageCount: 2,
  containerClassName: 'pagination',
  subContainerClassName: 'pages pagination',
  activeClassName: 'active',
  marginPagesDisplayed: 0
}