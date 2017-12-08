// Common libraries
import React, { Component } from 'react';

class CustomerInfo extends Component {
    componentWillMount() {
    }
    // @TODO - DO SOMETHING ABOUT THIS
    //customerid = this.props.customerid
    //data = this.props.data

    render() {

        // otherwise just render one customer by id
        if (this.props.customerid === undefined) {
            return (
                <div>
                    No ID!
                </div>
            );
        } else {
            console.log(this.props.data)
            return (
                <div>

                    <section className="component component-customer-info row">
                        <div className="col-sm-3">
                            <div className="user-initials">{this.props.data.client_id}</div>
                        </div>

                        <div className="col-sm-9">
                            <p className="heading1 heading">{this.props.data.first_name} {this.props.data.last_name}</p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <p>{this.props.data.reference}</p>
                                    <p><a href={"mailto:"+this.props.data.email}>{this.props.data.email}</a></p>
                                    <p><a href={"tel:"+this.props.data.phones.map(i=> {return (i.phone);})}>{this.props.data.phones.map(i=> {return (i.phone);})}</a></p>
                                </div>

                                <div className="col-sm-6">
                                    <p>221B Baker Street</p>
                                    <p>London</p>
                                    <p>N17 1AB</p>
                                </div>
                            </div>

                            <p className="view-more"><a href="">View More</a></p>
                        </div>

                    {this.props.editable && <div className="btn -edit">Edit Profile</div>}

                    </section>
                </div>
            )
        }
    }
}

export default CustomerInfo;