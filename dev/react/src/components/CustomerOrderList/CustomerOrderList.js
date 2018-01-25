import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {CustomerOrder} from '../../components';
import $ from 'jquery';

export default class CustomerOrderList extends Component {

  /* @NOTE - CustomerOrderList
   * Props: pass data
   */

  constructor(props){
    super(props)
    this.handleViewMore = this.handleViewMore.bind(this)
  }

  componentDidMount() {
    //console.log('mounted');
    // @TODO - Replace with React code
    $(document).on('click', '[data-pnp-toggle-class]', function () {
        $($(this).data('pnp-target')).toggleClass($(this).data('pnp-class'));
        $(this).toggleClass($(this).data('pnp-class'));
        return false;
    });
  }

  handleViewMore = () => {
    this.props.viewMoreCallback(this.props.customerid)
  }

  render() {

    return(
      <section className="component component-customer-orders row">
        <h2 className="heading2 heading">
            Orders
        {this.props.editable && <button className="btn -add">Place Order</button>}
        </h2>
        {/*<p className="sub-text">Showing {this.props.data.limit} of {this.props.data.count} </p>*/}

        {this.props.data.results.map((order, i) => {
            return <CustomerOrder key={i} id={i} customerid={this.props.customerid} data={order}/>
        })}

      {this.props.data.results.length >= 5 &&
        <button className="btn" onClick={this.handleViewMore}>View More</button>
      }
      </section>
    )

  }

}

CustomerOrderList.propTypes = {

  data: PropTypes.object,
  /*
    Data - Holds all data used in the render method. It should be an object and is required
    or this component will fail
  */
  editable: PropTypes.bool
  /*
    Editable - Boolean flag to decide whether to show editable ontrols
  */
}