import React, { Component } from 'react';
import Moment from 'react-moment';

import '../../scss/components/orders.css';

class OrderView extends Component {


    render() {



        let $currency = this.props.data.currency,
            $class = this.props.id === 0 ? '-in':'';

        return (
                <div>

                    <div className={"row component card component-card-order "+$class} data-pnp-toggle-class data-pnp-target=".order-1" data-pnp-class="-in" /*onClick={this.toggle.bind(this)}*/>

                        <div className="col-sm-7">
                            <p className="order-id heading2">{this.props.data.external_id}</p>
                            <p className="sub-text">
                                <Moment date={this.props.data.created} format="DD MMM YYYY" /> | {this.props.data.reference}
                            </p>
                        </div>

                        <div className="col-sm-5 text-right">
                            <span className="status sub-text">{this.props.data.status}</span>
                            <span className="price">{$currency} {this.props.data.price}</span>
                        </div>
                    </div>

                    <div className={"row component component-card-order-info order-1 "+$class}>

                        {this.props.data.shipment.map(function(shipment, i) {
                            let $n = i+1;

                            return (
                                <div key={i}>

                                    <header className="shipment">
                                        Shipment {$n} | {shipment.carrier_reference}
                                    </header>

                                    <div className="col-xs-12">

                                        {shipment.job.map(function(job, i) {

                                        return(
                                            <div key={i} className="row component card component-card-job">
                                                <div className="col-xs-4 col-sm-2">
                                                    <img src={job.product_image_url} className="img" alt=""/>
                                                </div>

                                                <div className="col-xs-8 col-sm-5 text-container">
                                                    <p className="job-name heading2">{job.product_brand}, {job.product_colour}</p>
                                                    <p className="sub-text">{shipment.mbf_reference}/{job.id}</p>
                                                </div>

                                                <div className="col-sm-5 text-right">
                                                    <span className="status sub-text">{job.status}</span>
                                                    <span className="price">{$currency} {job.price}</span>
                                                </div>

                                            </div>
                                            )
                                        })}
                                    </div>

                                    <div className="clearfix" />

                                </div>


                            );
                        })}

                    </div>

                </div>
            );

    }
}

export default OrderView;