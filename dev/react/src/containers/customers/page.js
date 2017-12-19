import React, { Component } from 'react';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import CustomerOrderList from '../../components/CustomerOrderList/CustomerOrderList';
import CustomerPrescriptionComponent from '../../components/CustomerPrescriptions/CustomerPrescriptions';

import { connect } from 'react-redux';

import $ from 'jquery';
import StickyBar from "../../components/StickyBar/StickyBar";
import * as SummaryActions from '../../redux/modules/customers'

@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {...SummaryActions}
)
export default class Summarypage extends Component {

    constructor(props) {
        super(props)
        console.log('id is '+this.props.match.params.customerid);
        this.props.getData(this.props.match.params.customerid);
    }

  render() {

      if (this.props.loading === true || typeof this.props.payload === 'undefined') {
          return (
              <div>
                  <div className="left-panel">
                    <p>Loading...</p>
                  </div>
              </div>
          );
      }

      if (this.props.success === false) {
          return (
              <div>
                  <div className="left-panel">
                      <p><strong>Error:</strong> {this.props.payload.message}</p>
                  </div>
              </div>
          );
      }



      let $id = this.props.match.params.customerid;
    if (this.props.payload[1]) {
      return (
          <div>
              <StickyBar path={this.props.location.pathname}/>

              <div className="left-panel">
                  <p className="sub-text">Showing {this.props.payload[1].data[0].limit} of {this.props.payload[1].count} </p>
                  <CustomerInfo customerid={$id} data={this.props.payload[0].data} editable={true}/>
                  <CustomerOrderList data={this.props.payload[1].data[0]} customerid={$id} editable={true}/>
                  <CustomerPrescriptionComponent customerid={$id} data={this.props.payload[2].data} name={this.props.payload[0].data.first_name+' '+this.props.payload[0].data.last_name} />
              </div>










              {/*just placeholder for now*/}


              <div className="right-panel -dark-inset cust-scroll">
                  <a href="" data-pnp-back className="btn -back"><i className="ion-android-arrow-back"></i> Back</a>

                  <section className="component component-order-summary">
                      <h2 className="heading1 heading">ORDR21728526</h2>

                      <p className="sub-text">
                          09 aug 2017 | Order Reference | In Progress
                      </p>

                      <p className="heading2">£120</p>

                      <a href="" className="actions"><i className="ion-more actions"></i></a>

                      <hr />
                          <div className="account-balance">
                              ACCOUNT BALANCE STUFF, TBC
                          </div>
                  </section>

                  <section className="component component-shipment">
                      <header className="shipment-details">
                          <p className="heading">Shipment 1 | UPS243752095</p>
                          <p>15 The Robins, Bracknell, Berkshire, RG12 8BU <i className="ion-android-arrow-dropdown"></i></p>
                          <p>Sent via UPS on 16/04/17 -  Signed for by John Smith</p>
                      </header>

                      <div className="component component-shipment-job">
                          <div className="row summary">
                              <div className="col-xs-4 col-sm-5 image-container">
                                  <img src="http://mog.pnpd.co.uk/cdn/img/glasses_lg_1.png" className="img" alt=""/>
                              </div>

                              <div className="col-xs-8 col-sm-7 text-container">
                                  <p className="job-name heading2">London Retro Reggie</p>
                                  <p className="sub-text">2168314/23505344 & Frame details</p>
                                  <p className="sub-text"><i className="ion-checkmark-circled"></i> Completed</p>
                                  <p className="heading2">£20</p>
                                  <a href="" className="actions"><i className="ion-more actions"></i></a>
                              </div>
                          </div>

                          <div className="row accordions">
                              <div className="col-xs-12">

                                  <div className="accordion">
                                      <h3 className="heading heading2 trigger">Addresses</h3>
                                      <div className="reveal">
                                          <div className="display-table-sm -addresses">
                                              <div>
                                                  <div className="address-container">
                                                      <p className="sub-text">Billing Address</p>

                                                      <p className="heading">Mr John Smith</p>

                                                      <p className="address">
                                                          9 Richmond Close <br/>
                                                          Southwood Lane <br/>
                                                          Farnborough <br/>
                                                          Hampshire <br/>
                                                          GU14 0RH
                                                      </p>
                                                  </div>

                                                  <div className="address-container">
                                                      <p className="sub-text">Delivery Address</p>

                                                      <p className="heading">Mr Darren Johnson</p>

                                                      <p className="address">
                                                          30 Stamford Street <br/>
                                                          London <br/>
                                                          SE1 9LQ
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="clearfix"></div>
                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Items</h3>
                                      <div className="reveal">
                                          TBC
                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Prescription</h3>
                                      <div className="reveal">

                                          <div className="component component-prescription">
                                              <h3 className="heading heading2">John Smith</h3>
                                              <p className="sub-text">21 Jul 2017 | Reference: July 2017</p>
                                              <button className="btn -edit">Change Prescription</button>

                                              <table className="prescription-table table">
                                                  <thead>
                                                  <tr>
                                                      <th></th>
                                                      <th>SPH</th>
                                                      <th>CYL</th>
                                                      <th>Axis</th>
                                                      <th>Prism</th>
                                                      <th>Base</th>
                                                      <th>Near Add</th>
                                                      <th>Mono PD</th>
                                                      <th>PD</th>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr className="right-eye">
                                                      <td>R</td>
                                                      <td>-3.50</td>
                                                      <td>none</td>
                                                      <td>0</td>
                                                      <td>-</td>
                                                      <td>-</td>
                                                      <td>0.00</td>
                                                      <td>0.00</td>
                                                      <td>63</td>
                                                  </tr>
                                                  <tr className="left-eye">
                                                      <td>L</td>
                                                      <td>-3.00</td>
                                                      <td>-4.00</td>
                                                      <td>145</td>
                                                      <td>-</td>
                                                      <td>-</td>
                                                      <td>0.00</td>
                                                      <td>0.00</td>
                                                      <td></td>
                                                  </tr>
                                                  </tbody>
                                              </table>

                                              <div className="extra">
                                                  <strong>Extra Information:</strong>
                                                  <p>Distance acuity: Right 6/6 Left 6/6 Near acuity: Right: n6 Left: n6  </p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Notes</h3>
                                      <div className="reveal">
                                          <section className="row component-job-notes">

                                              Notes placeholder


                                          </section>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="component component-shipment-job">
                          <div className="row summary">
                              <div className="col-xs-4 col-sm-5 image-container">
                                  <img src="http://mog.pnpd.co.uk/cdn/img/glasses_lg_2.png" className="img" alt=""/>
                              </div>

                              <div className="col-xs-8 col-sm-7 text-container">
                                  <p className="job-name heading2">Taylor Gun Metal</p>
                                  <p className="sub-text">2168314/23505344 & Frame details</p>
                                  <p className="sub-text"><i className="ion-checkmark-circled"></i> Completed</p>
                                  <p className="heading2">£60</p>
                                  <a href="" className="actions"><i className="ion-more actions"></i></a>
                              </div>
                          </div>

                          <div className="row accordions">
                              <div className="col-xs-12">

                                  <div className="accordion">
                                      <h3 className="heading heading2 trigger">Addresses</h3>
                                      <div className="reveal">
                                          <div className="display-table-sm -addresses">
                                              <div>
                                                  <div className="address-container">
                                                      <p className="sub-text">Billing Address</p>

                                                      <p className="heading">Mr John Smith</p>

                                                      <p className="address">
                                                          9 Richmond Close <br/>
                                                          Southwood Lane <br/>
                                                          Farnborough <br/>
                                                          Hampshire <br/>
                                                          GU14 0RH
                                                      </p>
                                                  </div>

                                                  <div className="address-container">
                                                      <p className="sub-text">Delivery Address</p>

                                                      <p className="heading">Mr Darren Johnson</p>

                                                      <p className="address">
                                                          30 Stamford Street <br/>
                                                          London <br/>
                                                          SE1 9LQ
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="clearfix"></div>
                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Items</h3>
                                      <div className="reveal">
                                          TBC
                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Prescription</h3>
                                      <div className="reveal">

                                          <div className="component component-prescription">
                                              <h3 className="heading heading2">John Smith</h3>
                                              <p className="sub-text">21 Jul 2017 | Reference: July 2017</p>
                                              <button className="btn -edit">Change Prescription</button>

                                              <table className="prescription-table table">
                                                  <thead>
                                                  <tr>
                                                      <th></th>
                                                      <th>SPH</th>
                                                      <th>CYL</th>
                                                      <th>Axis</th>
                                                      <th>Prism</th>
                                                      <th>Base</th>
                                                      <th>Near Add</th>
                                                      <th>Mono PD</th>
                                                      <th>PD</th>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr className="right-eye">
                                                      <td>R</td>
                                                      <td>-3.50</td>
                                                      <td>none</td>
                                                      <td>0</td>
                                                      <td>-</td>
                                                      <td>-</td>
                                                      <td>0.00</td>
                                                      <td>0.00</td>
                                                      <td>63</td>
                                                  </tr>
                                                  <tr className="left-eye">
                                                      <td>L</td>
                                                      <td>-3.00</td>
                                                      <td>-4.00</td>
                                                      <td>145</td>
                                                      <td>-</td>
                                                      <td>-</td>
                                                      <td>0.00</td>
                                                      <td>0.00</td>
                                                      <td></td>
                                                  </tr>
                                                  </tbody>
                                              </table>

                                              <div className="extra">
                                                  <strong>Extra Information:</strong>
                                                  <p>Distance acuity: Right 6/6 Left 6/6 Near acuity: Right: n6 Left: n6  </p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Notes</h3>
                                      <div className="reveal">
                                          <section className="row component-job-notes">
                                              Notes place holder
                                          </section>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>

                  <section className="component component-shipment">
                      <header className="shipment-details">
                          <p className="heading">Shipment 2 | UPS243752096</p>
                          <p>15 The Robins, Bracknell, Berkshire, RG12 8BU <i className="ion-android-arrow-dropdown"></i></p>
                          <p>Not Shipped</p>
                      </header>

                      <div className="component component-shipment-job">
                          <div className="row summary">
                              <div className="col-xs-4 col-sm-5 image-container">
                                  <img src="http://mog.pnpd.co.uk/cdn/img/glasses_lg_3.png" className="img" alt=""/>
                              </div>

                              <div className="col-xs-8 col-sm-7 text-container">
                                  <p className="job-name heading2">Scout Charley, Matt Brown</p>
                                  <p className="sub-text">2168314/23505344 & Frame details</p>
                                  <p className="sub-text">In Lab</p>
                                  <p className="heading2">£40</p>
                                  <a href="" className="actions"><i className="ion-more actions"></i></a>
                              </div>
                          </div>

                          <div className="row accordions">
                              <div className="col-xs-12">

                                  <div className="accordion">
                                      <h3 className="heading heading2 trigger">Addresses</h3>
                                      <div className="reveal">
                                          <div className="display-table-sm -addresses">
                                              <div>
                                                  <div className="address-container">
                                                      <p className="sub-text">Billing Address</p>

                                                      <p className="heading">Mr John Smith</p>

                                                      <p className="address">
                                                          9 Richmond Close <br/>
                                                          Southwood Lane <br/>
                                                          Farnborough <br/>
                                                          Hampshire <br/>
                                                          GU14 0RH
                                                      </p>
                                                  </div>

                                                  <div className="address-container">
                                                      <p className="sub-text">Delivery Address</p>

                                                      <p className="heading">Mr Darren Johnson</p>

                                                      <p className="address">
                                                          30 Stamford Street <br/>
                                                          London <br/>
                                                          SE1 9LQ
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>

                                          <div className="clearfix"></div>
                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Items</h3>
                                      <div className="reveal">
                                          TBC
                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Prescription</h3>
                                      <div className="reveal">

                                          <div className="component component-prescription">
                                              <h3 className="heading heading2">John Smith</h3>
                                              <p className="sub-text">21 Jul 2017 | Reference: July 2017</p>
                                              <button className="btn -edit">Change Prescription</button>

                                              <table className="prescription-table table">
                                                  <thead>
                                                  <tr>
                                                      <th></th>
                                                      <th>SPH</th>
                                                      <th>CYL</th>
                                                      <th>Axis</th>
                                                      <th>Prism</th>
                                                      <th>Base</th>
                                                      <th>Near Add</th>
                                                      <th>Mono PD</th>
                                                      <th>PD</th>
                                                  </tr>
                                                  </thead>
                                                  <tbody>
                                                  <tr className="right-eye">
                                                      <td>R</td>
                                                      <td>-3.50</td>
                                                      <td>none</td>
                                                      <td>0</td>
                                                      <td>-</td>
                                                      <td>-</td>
                                                      <td>0.00</td>
                                                      <td>0.00</td>
                                                      <td>63</td>
                                                  </tr>
                                                  <tr className="left-eye">
                                                      <td>L</td>
                                                      <td>-3.00</td>
                                                      <td>-4.00</td>
                                                      <td>145</td>
                                                      <td>-</td>
                                                      <td>-</td>
                                                      <td>0.00</td>
                                                      <td>0.00</td>
                                                      <td></td>
                                                  </tr>
                                                  </tbody>
                                              </table>

                                              <div className="extra">
                                                  <strong>Extra Information:</strong>
                                                  <p>Distance acuity: Right 6/6 Left 6/6 Near acuity: Right: n6 Left: n6  </p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>

                                  <div className="accordion">
                                      <h3 className="heading heading8 trigger">Notes</h3>
                                      <div className="reveal">
                                          <section className="row component-job-notes">
                                              Notes placeholder
                                          </section>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              </div>

          </div>

      );
    } else {
      return (<div>Loading...</div>)
    }
  }
}