import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../../scss/components/icon.css';

export default class Icon extends Component {

  /* @NOTE - Icon
   * Props: pass data
   * iconName
   * className
   *
   */

  render() {
    const classString = 'icon ' + this.props.className + ' ' + this.props.icon;
    return(
      <div className={classString} title={this.props.title}>
      </div>
    )
  }
}

Icon.propTypes = {

  className: PropTypes.string,
  /*
    className - CSS class used to style the icon
  */
  icon: PropTypes.string.isRequired,
  /*
    Icon - Required to display the correct ionicon
  */
  title: PropTypes.string
  /*
    Title - Opitional title to appear on hover using default browser behaviour
  */
}