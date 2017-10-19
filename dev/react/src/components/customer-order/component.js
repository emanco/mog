// Common libraries
import React, { Component } from 'react';

// Include dumb component
import CustomerOrderView from "./view";


class CustomerOrderComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
    }

    render() {
        let $this = this;

        return (
            <CustomerOrderView id={this.props.id} customerid={$this.props.customerid}  data={$this.props.data} />
        );
    }
}

export default CustomerOrderComponent;