// Common libraries
import React, { Component } from 'react';
import CustomerInfo from "../CustomerInfo/CustomerInfo";
import CustomerOrderComponent from "../CustomerOrder/CustomerOrder";
import CustomerPrescriptionComponent from "../CustomerPrescriptions/CustomerPrescriptions";

import { connect } from 'react-redux';
import { getUserData } from "./actions";

// for animation, hopefully!
//import TransitionGroup from 'react-transition-group/TransitionGroup';
import TweenMax from 'gsap';
//TODO: read https://greensock.com/forums/topic/15749-gsap-with-create-react-app/ and figure out how to implement GSAP



class SearchUser extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        //this.props.dispatch(getUserData(1));
    }

    componentDidMount() {
        this.props.onRef(this);

        TweenMax.from('.customer-info',0.5,{autoAlpha:0} );
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
            <div className='customer-info'>

                    <CustomerInfo customerid={this.props.id} data={this.props.payload[0].data}/>

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

                    <CustomerPrescriptionComponent customerid={this.props.id} data={this.props.payload[2].data} name={this.props.payload[0].data.first_name+' '+this.props.payload[0].data.last_name} />


            </div>
        )
    }
}

//export default SearchUserComponent;

export default connect((state) => {
    return state.userReducer;
})(SearchUser);