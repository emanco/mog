// Common libraries
import React, { Component } from 'react';

// Include dumb component
import CustomerinfoView from "./view";


class CustomerinfoComponent extends Component {
    componentWillMount() {
    }


    render() {

        // otherwise just render one customer by id
        return (
            <div>
                <CustomerinfoView customerid={this.props.customerid} data={this.props.data} />
            </div>
        )
    }
}

export default CustomerinfoComponent;