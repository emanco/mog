// Common libraries
import React, { Component } from 'react';

// Include dumb component
import SearchResultView from "./view";

// CSS
import './../../scss/components/search-results.css';


class SearchResultComponent extends Component {
    componentWillMount() {
    }


    render() {

        // otherwise just render one customer by id
        return (
            <section className="component component-results">
                <SearchResultView searchid={this.props.searchid} data={this.props.data} />
            </section>
        )
    }
}

export default SearchResultComponent;