// Common libraries
import React, { Component } from 'react';

// Include dumb component
import CustomerPrescriptionView from "./view";


class CustomerPrescriptionComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
    }

    render() {
        let $this = this;

        return (
            <CustomerPrescriptionView customerid={$this.props.customerid} data={$this.props.data} name={$this.props.name}/>
        );
    }
}

export default CustomerPrescriptionComponent;