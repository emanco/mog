import React from 'react';
import "./../../scss/components/breadcrumbs.css";

const Breadcrumbs = () => {
  return(<div id="mog-breadcrumb" className="row mog-breadcrumb nav-height">
      <ul className="list-inline">
          <li><a href="/customers/CUS123456789">Dave Ordersworth</a></li>
          <li><a href="/customers/CUS123456789/orders">ORDR21892503</a></li>
          <li className="active"><a href="">London Retro Reggie</a></li>
      </ul>
  </div>)
}

export default Breadcrumbs;