import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {onSubmit, getSearch} from "../SearchResults/actions";

import './../../scss/components/header.css';

import TagsComponent from './../Tags/Tags';

class Header extends Component {

    constructor() {
        super();

        this.onSubmit = this.handleSubmit.bind(this);
        this.onChange = this.handleChange.bind(this);

        this.state = {tags: []}
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let query = this.refs["search"].value;
        console.log(query);

        this.props.dispatch(onSubmit(query));

        this.props.history.push('/search/'+query);
        this.props.dispatch(getSearch(query));

    };

    handleChange = (e) => {
        e.preventDefault();
        //this.props.dispatch(change(e.target.value));  // causes empty load page!
        //this.props.history.push('/search/'+e.target.value);
        console.log('changed input: '+e.target.value);
    };

    render() {

        return (
            <div>
                <header className="nav-container nav-height">
                    <i className="ion-ios-search" />

                    <TagsComponent />

                    {/*<form onSubmit={this.onSubmit}>*/}
                        {/*<input ref="search" type="text" className="form-control search" placeholder="" onChange={this.onChange}/>*/}
                    {/*</form>*/}

                    <div className="burger-container">
                        <button className="burger" id="nav-burger" type="button">
                            <span className="sr-only">Toggle navigation</span>
                            <i />
                        </button>
                    </div>
                </header>
            </div>
        );
    }
}

//export default withRouter(HeaderComponent);

export default connect((state) => {
    return state.searchReducer;
})(withRouter(Header));