// Common libraries
import React, { Component } from 'react';

// Include dumb component
import CustomerInfoView from "./view";


class CustomerInfoComponent extends Component {
    componentWillMount() {
    }


    render() {

        // otherwise just render one customer by id
        return (
            <div>
                <CustomerInfoView customerid={this.props.customerid} data={this.props.data} />
            </div>
        )
    }
}

export default CustomerInfoComponent;