import React, { Component } from 'react';
import Select from 'react-select-plus';
import 'react-select-plus/dist/react-select-plus.css';

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
    this.props.handleChange(selectedOption.value)
    console.log(selectedOption)
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    return (
      <Select
        name="form-field-name"
        value={this.state.selectedOption}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
        clearable={false}
        options={this.props.options}
      />
    );
  }
}

export default SelectBox;