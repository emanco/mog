// Common libraries
import React, { Component } from 'react';
import '../../scss/components/stickyDropdown.css';

class StickyDropdown extends Component {

  constructor(props) {
    super(props)
    this.toggleMenuClick = this.toggleMenuClick.bind(this)
    this.handleStatusSelect = this.handleStatusSelect.bind(this)
    this.state = {
      currentLabel: this.props.values[0].label,
      currentValue: this.props.values[0].value,
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

  handleStatusSelect(filter) {
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
          { this.props.values.map((item, key) => {
              return (
                <li key={key} onClick={() => this.handleStatusSelect(item) } className={"f36 sticky-dropdown-list-item sticky-item-" + item.class}>{item.label}</li>
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