// Common libraries
import React, { Component } from 'react';

// Include dumb component
import PrescriptionView from "./view";


class PrescriptionComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
    }

    render() {
        let $this = this;

        return (
            <PrescriptionView customerid={$this.props.customerid} data={$this.props.data} name={$this.props.name}/>
        );
    }
}

export default PrescriptionComponent;