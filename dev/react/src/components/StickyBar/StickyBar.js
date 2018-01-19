import React, { Component } from 'react'
import "./../../scss/components/stickybar.css"
import {Breadcrumbs, StickyDropdown} from "../../components"
import fraudStatusValues from '../../constants/fraudStatusValues'
import homeTrialStatusValues from '../../constants/homeTrialStatusValues'


class StickyBar extends Component {

    constructor(props) {
      super(props);
      this.filterListCallback = this.filterListCallback.bind(this)
    }

    filterListCallback = (value) => {
      this.props.filterListCallback(value)
    }


    render() {

        let $path = this.props.path;

        if ($path.includes('search')) {
            console.log('contains search :'+this.props.query);

            let $for = this.props.query !== undefined ? 'for' : null;

            return (
                <div className="sticky-bar nav-height">
                    <div id="mog-breadcrumb" className="row mog-breadcrumb nav-height">
                        <span className="search-results">Search Results {$for} {this.props.query}</span>
                    </div>
                </div>
            )
        } else if ($path.includes('fraud-check')) {
          return (
                <div className="sticky-bar nav-height">
                    <StickyDropdown values={fraudStatusValues} filterListCallback={this.filterListCallback }/>
                </div>
            )
        } else if ($path.includes('hometrial-orders')) {
          return (
                <div className="sticky-bar nav-height">
                    <StickyDropdown values={homeTrialStatusValues} filterListCallback={this.filterListCallback }/>
                </div>
            )
        } else {
            return (
                <div className="sticky-bar nav-height">
                    <Breadcrumbs />
                </div>
            )
        }
    }
}

export default StickyBar;