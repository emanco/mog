import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'
import FraudCheckList from '../../components/FraudCheckList/FraudCheckList'

import './../../scss/components/fraudCheckOverview.css';

@connect(
  (state, ownProps) => ({
    data: state.fraudCheckOverviewReducer.payload
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOverview extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      this.props.getFraudCheckList();
    }

  render() {

    if (!this.props.data[0]) {
      return (<div>LOADING...</div>)
    } else {
      return(
        <div className="fraudCheckOverview">
        <div className="left-panel">
          <div>{this.props.data[0].count} Items</div>
          <FraudCheckList data={this.props.data[0]} />
        </div>
        <div className="right-panel cust-scroll">
          Right Panel
        </div>
        </div>
      )
    }
  }
}