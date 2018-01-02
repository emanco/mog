import React, { Component } from 'react';

import '../../scss/components/icon.css';

export default class Icon extends Component {

  /* @NOTE - Icon
   * Props: pass data
   * iconName
   * className
   *
   */

  componentDidMount() {

    }

  render() {
    const classString = 'icon ' + this.props.className + ' ' + this.props.icon;
    return(
      <div className={classString}>
      </div>
    )
  }
}