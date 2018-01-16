import React, { Component } from 'react';
import moment from 'moment'
import DatePicker from 'react-datepicker'
import './../../scss/components/loginModal.css';
import 'react-datepicker/dist/react-datepicker.css';

// This is a rare exception where a container would be excessive so we'll connect a component to state.
// However that may change if we end of with various different modals. At present only one is planned.

export default class FormDatePicker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      startDate: moment(this.props.startDate)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      startDate: moment(this.props.startDate)
    })
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
    const utcFormat = moment(date).utc().format('YYYY-MM-DDTHH:MM:SS')
    this.props.handleChangeUpdate(utcFormat);
  }

  render() {
    return(
     <DatePicker
       className="form-control"
       selected={this.state.startDate}
       onChange={this.handleChange}
       dateFormat='DD/MM/YYYY'
       />
    )
  }
}