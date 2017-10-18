import React, { Component } from 'react';
import Moment from 'react-moment';

import '../../scss/components/orders.css';

class PrescriptionView extends Component {



    render() {

        let $this = this;

        return (
                <div>
                    <section className="component component-customer-prescriptions row">
                        <h2 className="heading2 heading">
                            Prescriptions
                            <button className="btn -add">Add Prescription</button>
                        </h2>
                        <p className="sub-text">Showing {this.props.data[0].limit} of {this.props.data[0].count}</p>

                    {this.props.data[0].results.map(function(prescription, i) {
                        return(
                            <div className="col-xs-12" key={i}>
                                <div className="row component card component-card-prescription -in">

                                    <div className="col-sm-10">
                                        <p className="prescription-id heading2">{$this.props.name}</p>
                                        <p className="sub-text">
                                            <Moment date={prescription.date_created} format="DD MMM YYYY" /> | Reference: {prescription.reference}
                                        </p>
                                    </div>

                                    <div className="col-sm-2 text-right">
                                        <i className="ion-more actions"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                        <button className="btn">View More</button>
                    </section>
                    
                </div>
            );

    }
}

export default PrescriptionView;