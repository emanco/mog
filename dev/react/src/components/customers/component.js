// Common libraries
import React, { Component } from 'react';

// Include dumb component
import CustomerView from "./view";


class CustomerComponent extends Component {
    componentWillMount() {
    }


    render() {

        // otherwise just render one customer by id
        return (
            <div>
                <CustomerView customerid={this.props.customerid} data={this.props.data} />
            </div>
        )
    }
}

export default CustomerComponent;