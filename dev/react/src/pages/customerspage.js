import React, { Component } from 'react';
import CustomerComponent from './../components/customers/component';

class Customerspage extends Component {
  render() {
      return (
          <div>
              <CustomerComponent customerid={this.props.match.params.customerid}/>
          </div>
      );
  }
}

export default Customerspage;
