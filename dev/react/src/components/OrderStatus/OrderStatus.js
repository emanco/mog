// Common libraries
import React, { Component } from 'react';
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