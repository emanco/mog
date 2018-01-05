// Common libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { getStatusClass } from  '../../helpers/mappings';

import '../../scss/components/orderStatus.css';

export default class OrderStatus extends Component {

    render() {
        const statusClass = getStatusClass(this.props.status);
        // otherwise just render one customer by id
        return (
          <div className={this.props.classes + ' status ' + statusClass}>
            {this.props.status}
          </div>
        )
    }
}

OrderStatus.propTypes = {

  classes: PropTypes.string,
  /*
    classes - CSS classes to be applied to the element
  */
  status: PropTypes.string.isRequired
  /*
    Status - Required to display the correct value
  */
}