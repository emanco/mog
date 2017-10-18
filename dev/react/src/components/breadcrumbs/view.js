import React, { Component } from 'react';
//import './../../scss/components/header.css';

// Ionicons
//import Ionicon from 'react-ionicons';

import Sticky from 'react-sticky-el';

class BreadcrumbsView extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <Sticky stickyClassName="sticky-breadcrumb">
                <div id="mog-breadcrumb" className="row mog-breadcrumb nav-height">
                    <ul className="list-inline">
                        <li><a href="/customers/CUS123456789">Dave Ordersworth</a></li>
                        <li><a href="/customers/CUS123456789/orders">ORDR21892503</a></li>
                        <li className="active"><a href="">London Retro Reggie</a></li>
                    </ul>
                </div>
            </Sticky>
        );
    }
}

export default BreadcrumbsView;