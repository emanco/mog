// Common libraries
import React, { Component } from 'react';

// Include dumb component
import SearchResultView from "./view";

import { connect } from 'react-redux';
import { getSearch } from "./actions";


// CSS
import './../../scss/components/search-results.css';


class SearchResultComponent extends Component {
    componentWillMount() {
        this.props.dispatch(getSearch(this.props.searchid));

        //this.props.dispatch(getData(this.props.payload.data[0].hits.hit[0].fields.customer_id));
    }



    render() {

        if (this.props.loading === true || typeof this.props.payload === 'undefined') {
            return (
                <p>Loading...</p>
            );
        }

        if (this.props.success === false) {
            return (
                <p><strong>Error:</strong> {this.props.payload.message}</p>
            );
        }

        // otherwise just render one customer by id
        return (
            <section className="component component-results">
                    <SearchResultView searchid={this.props.searchid} data={this.props.payload.data} change={this.props.change} />
            </section>
        )
    }
}

export default connect((state) => {
    return state.searchReducer;
})(SearchResultComponent);