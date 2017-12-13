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
      currentLabel: fraudFilterValues[0].label,
      currentValue: fraudFilterValues[0].value,
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

  handleFilterSelect(filter) {
    console.log('click - ' + filter.label)
    this.setState({
      currentLabel: filter.label,
      currentValue: filter.value
    })
  }

  render() {
    return(
      <div className="sticky-dropdown">
        <div className="sticky-dropdown-current heading1" onClick={() => this.toggleMenuClick()}>{this.state.currentLabel}</div>
        {this.state.ddOpen && <div className="sticky-dropdown-list">
          <ul>
          { fraudFilterValues.map((item, key) => {
              return (
                <li key={key} onClick={() => this.handleFilterSelect(item) }>{item.label}</li>
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