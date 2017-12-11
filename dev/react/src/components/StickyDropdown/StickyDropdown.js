// Common libraries
import React, { Component } from 'react';
import fraudFilterValues from '../../constants/fraudFilterValues';

import '../../scss/components/stickyDropdown.css';

class StickyDropdown extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleFilterSelect.bind(this)
    this.toggleMenuClick = this.toggleMenuClick.bind(this)
    this.state = {
      currentValue: 'Current Value',
      ddOpen: false
    }
  }

  toggleMenuClick() {
    if (!this.state.ddOpen) {
      this.setState({ddOpen: true})
    } else {
      this.setState({ddOpen: false})
    }
  }

  handleFilterSelect(filterValue) {
    console.log('click - ' + filterValue)
  }

  render() {
    return(
      <div className="sticky-dropdown">
        <div className="" onClick={() => this.toggleMenuClick()}>{this.state.currentValue}</div>
        {this.state.ddOpen && <div className="sticky-dropdown-list">
          <ul>
          { fraudFilterValues.map((item, key) => {
              return (
                <li key={key} onClick={() => this.handleFilterSelect(item.value) }>{item.label}</li>
              )
            })
          }
          </ul>
        </div>}
      </div>
    )
  }
}

export default StickyDropdown;