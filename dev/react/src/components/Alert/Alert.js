import React from 'react';

import './../../scss/components/alert.css';

const Alert = (props) => {
    return(
      <div className={`alert mo-alert-${props.type} f16`}>{props.msg}</div>
    )
}

export default Alert;