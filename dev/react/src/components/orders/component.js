// Common libraries
import React, { Component } from 'react';

// Include dumb component
import OrderView from "./view";


class OrderComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
    }

    render() {
        let $this = this;

        return (
            <OrderView id={this.props.id} customerid={$this.props.customerid}  data={$this.props.data} />
        );
    }
}

export default OrderComponent;