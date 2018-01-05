import React, { Component } from 'react';

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