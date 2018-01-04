// Common libraries
import React, { Component } from 'react';
import fraudStatusValues from '../../constants/fraudStatusValues';
import '../../scss/components/stickyDropdown.css';

class StickyDropdown extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleFilterSelect.bind(this)
    this.toggleMenuClick = this.toggleMenuClick.bind(this)
    this.handleFilterSelect = this.handleFilterSelect.bind(this)
    this.state = {
      currentLabel: fraudStatusValues[0].label,
      currentValue: fraudStatusValues[0].value,
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
    this.setState({
      currentLabel: filter.label,
      currentValue: filter.value
    })
    this.toggleMenuClick()

    // Callback to make API request
    this.props.filterListCallback(filter.value);
  }

  render() {
    return(
      <div className="sticky-dropdown">
        <div className="sticky-dropdown-current heading1" onClick={() => this.toggleMenuClick()}>{this.state.currentLabel}</div>
        {this.state.ddOpen && <div className="sticky-dropdown-list">
          <ul>
          { fraudStatusValues.map((item, key) => {
              return (
                <li key={key} onClick={() => this.handleFilterSelect(item) } className={"sticky-dropdown-list-item sticky-item-" + item.class}>{item.label}</li>
              )
            })
          }
          </ul>
        </div>
        }
        {this.state.ddOpen && <div className="sticky-dropdown-overlay" onClick={() => this.toggleMenuClick()}></div>}
      </div>
    )
  }
}

export default StickyDropdown;