// Common libraries
import React, { Component } from 'react';

// Include dumb component
import CardorderView from "./view";


class CardorderComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
    }

    render() {
        let $this = this;

        return (
            <CardorderView id={this.props.id} customerid={$this.props.customerid}  data={$this.props.data} />
        );
    }
}

export default CardorderComponent;