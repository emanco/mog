import React, { Component } from 'react';
import "./../../scss/components/breadcrumbs.css";

//import './../../scss/components/header.css';

// Ionicons
//import Ionicon from 'react-ionicons';



import Sticky from 'react-sticky-el';

class BreadcrumbsComponent extends Component {

    componentWillMount() {

    }

    render() {


        let $path = this.props.path;

        if ($path.includes('search')) {
            console.log('contains search :'+this.props.query);

            let $for = this.props.query !== undefined ? 'for' : null;

            return (
                <Sticky stickyClassName="sticky-breadcrumb">
                    <div id="mog-breadcrumb" className="row mog-breadcrumb nav-height">
                        <span className="search-results">Search Results {$for} {this.props.query}</span>
                    </div>
                </Sticky>
            )
        } else {
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
            )
        }
    }
}

export default BreadcrumbsComponent;