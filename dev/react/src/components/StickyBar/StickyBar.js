import React, { Component } from 'react';
import "./../../scss/components/stickybar.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
//import './../../scss/components/header.css';

// Ionicons
//import Ionicon from 'react-ionicons';



import Sticky from 'react-sticky-el';

class StickyBar extends Component {

    componentWillMount() {

    }

    render() {


        let $path = this.props.path;

        if ($path.includes('search')) {
            console.log('contains search :'+this.props.query);

            let $for = this.props.query !== undefined ? 'for' : null;

            return (
                <Sticky stickyClassName="sticky-bar">
                    <div id="mog-breadcrumb" className="row mog-breadcrumb nav-height">
                        <span className="search-results">Search Results {$for} {this.props.query}</span>
                    </div>
                </Sticky>
            )
        } else if ($path.includes('fraud-check')) {
          return (
                <Sticky className="sticky-bar">
                    Fraud Check
                </Sticky>
            )
        } else {
            return (
                <Sticky stickyClassName="sticky-bar">
                    <Breadcrumbs />
                </Sticky>
            )
        }
    }
}

export default StickyBar;