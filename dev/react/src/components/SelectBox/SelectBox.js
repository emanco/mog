import React, { Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

import fraudStatusValue from '../../constants/fraudStatusValues';

class SelectBox extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      selectedOption: ''
    }
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    let option = selectedOption
    if (!selectedOption) {
      option = {
        value: ''
      }
    }

    this.props.handleChange(option.value);
  }

  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.selectedOption}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        options={this.props.options}
      />
    );
  }
}

export default SelectBox;