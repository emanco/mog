import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as fraudCheckOverviewActions from '../../redux/modules/fraudCheckOverview'

import FraudCheckListItem from '../../components/FraudCheckListItem/FraudCheckListItem'

export default class FraudCheckList extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

  render() {
    return(
      <div>
        {
          this.props.data.results.map((result, i) => {
            return (<FraudCheckListItem data={result} key={i} />)
          })
        }
      </div>
    )
  }
}


FraudCheckList.propTypes = {
  /*
  *   Array of orders to be displayed in the list
  */
  data: PropTypes.object
}