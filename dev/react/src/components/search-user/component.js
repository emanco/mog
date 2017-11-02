// Common libraries
import React, { Component } from 'react';
import CustomerInfoComponent from "../customer-info/component";
import CustomerOrderComponent from "../customer-order/component";
import CustomerPrescriptionComponent from "../customer-prescriptions/component";


import { connect } from 'react-redux';
import { getUserData } from "./actions";


class SearchUserComponent extends Component {

    componentWillMount() {
        //this.props.dispatch(getUserData(1));
    }

    componentDidMount() {
        this.props.onRef(this);
    }
    componentWillUnmount() {
        this.props.onRef(undefined);
    }


    // this function is being called by the parent component and triggered by another child component!
    onChange(id) {
        console.log('triggered child function with new id: '+id);

        //console.log('data is: '+this.props.payload_user)

        this.props.dispatch(getUserData(id));
    }


    render() {

        if (this.props.loading === true || typeof this.props.payload === 'undefined') {
            return (
                <p>Loading...</p>
            );
        }

        if (this.props.success === false) {
            return (
                <p><strong>Error:</strong> {this.props.payload.message}</p>
            );
        }

        let $this = this;

        // otherwise just render one customer by id
        return (
            <div>
                <CustomerInfoComponent customerid={this.props.id} data={this.props.payload[0].data}/>

                <section className="component component-customer-orders row">
                    <h2 className="heading2 heading">
                        Orders
                        <button className="btn -add">Place Order</button>
                    </h2>
                    <p className="sub-text">Showing {this.props.payload[1].data[0].limit} of {this.props.payload[1].data[0].count} </p>

                    {this.props.payload[1].data[0].results.map(function(order, i) {
                        return <CustomerOrderComponent key={i} id={i} customerid={$this.props.id} data={order} />
                    })}

                    <button className="btn">View More</button>
                </section>

                {/*<CustomerPrescriptionComponent customerid={this.props.id} data={this.props.payload[2].data} name={this.props.payload[0].data.first_name+' '+this.props.payload[0].data.last_name} />*/}

            </div>
        )
    }
}

//export default SearchUserComponent;

export default connect((state) => {
    return state.userReducer;
})(SearchUserComponent);