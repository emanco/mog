import React, { Component } from 'react';

import { connect } from 'react-redux';
import { asyncConnect } from 'redux-connect';

//components
import HeaderComponent from '../../components/Header/Header';
//import StickyBarComponent from './components/StickyBar/StickyBar';
import FooterComponent from '../../components/Footer/Footer';

import * as AuthActions from '../../redux/modules/auth'


@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    Promise.resolve(dispatch(AuthActions.authorise()));
  }
}])
@connect(
  (state, ownProps) => ({
    payload: state.summaryReducer.payload
  }),
  {}
)
export default class App extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

  render() {
    return(
      <div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}