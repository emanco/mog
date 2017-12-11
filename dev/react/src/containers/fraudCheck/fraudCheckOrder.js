import React, { Component } from 'react';

import { connect } from 'react-redux';

import StickyBarComponent from "../../components/StickyBar/StickyBar";
import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'

@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {...fraudCheckOverviewActions}
)
export default class fraudCheckOrder extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

  render() {
    return(<div>Fraud Check Order Container</div>)
  }
}