import React, { Component } from 'react';
import CustomerInfoComponent from '../../components/customer-info/component';
import CustomerOrderComponent from '../../components/customer-order/component';
import CustomerPrescriptionComponent from '../../components/customer-prescriptions/component';

import { connect } from 'react-redux';

import {getData} from "./actions";
import BreadcrumbsComponent from "../../components/breadcrumbs/view";
import SearchResultComponent from "../../components/search-results/component";


class Searchpage extends Component {

    componentWillMount() {
        console.log('id is '+this.props.match.params.searchid);
        this.props.dispatch(getData(this.props.match.params.searchid));
    }

    componentDidMount() {
        //console.log('mounted');
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



      let $id = this.props.match.params.searchid;

      return (


          <div>
              <BreadcrumbsComponent number={this.props.payload[3].data[0].hits.hit.length} path={this.props.location.pathname} query={$id}/>

              <div className="left-panel">
                  <SearchResultComponent searchid={$id} data={this.props.payload[3].data}/>
              </div>

              <div className="right-panel">


                  <CustomerInfoComponent customerid={$id} data={this.props.payload[0].data}/>


                  <section className="component component-customer-orders row">
                      <h2 className="heading2 heading">
                          Orders
                          <button className="btn -add">Place Order</button>
                      </h2>
                      <p className="sub-text">Showing {this.props.payload[1].data[0].limit} of {this.props.payload[1].data[0].count} </p>

                      {this.props.payload[1].data[0].results.map(function(order, i) {
                          return <CustomerOrderComponent key={i} id={i} customerid={$id} data={order} />
                      })}

                  <button className="btn">View More</button>
                  </section>

                 <CustomerPrescriptionComponent customerid={$id} data={this.props.payload[2].data} name={this.props.payload[0].data.first_name+' '+this.props.payload[0].data.last_name} />
              </div>


          </div>

      );
  }
}

//export default Summarypage;


export default connect((state) => {
    return state.searchReducer;
})(Searchpage);