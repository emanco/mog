import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {onSubmit, getSearch} from "../../redux/modules/search";

//import 'react-tagsinput/react-tagsinput.css' // If using WebPack and style-loader.

class Tags extends Component {
    constructor() {
        super();
        this.state = {tags: [], tag: ''}
    }

    handleChange(tags) {
        this.setState({tags})
        console.log('new tag:'+tags);
    }

    handleInputChange(value) {

        //console.log('input changed '+value);

        // if (value.length > 2) {
        //     console.log(this.refs);
        //     return value.accept();
        //
        //     //return this.refs.tagsinput.accept()
        // }

        this.setState({tag: value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('tags '+this.state.tags);
        console.log('input '+this.state.tag);

        let query;

        if (this.state.tag!=='' && this.state.tags.length===0) {
            query = this.state.tag;     // query only the search input
        } else {
            if (this.state.tag!=='') {
                query = this.state.tags;    // query all tags
            } else {

                //let $tags = this.state.tags.push(this.state.tag)   // append the input here to tags
                //this.setState({tags: $tags});
                query = this.state.tags;
            }
        }

        console.log('query '+query);

        this.props.dispatch(onSubmit(query));

        this.props.router.push('/search/'+query);
        console.log('HANDLE TAG SUBMIT');
        this.props.dispatch(getSearch(query));
    }


    defaultRenderLayout (tagComponents, inputComponent) {

        this.onSubmit = this.handleSubmit.bind(this);

        return (

            <span>
                <form action="" onSubmit={this.onSubmit}>
                {tagComponents}
                {inputComponent}
                </form>
            </span>
        )
    }

    render() {
        return <TagsInput
                inputProps={{placeholder: "Enter search terms divided by commas",}}
                renderLayout={this.defaultRenderLayout.bind(this)}
                value={this.state.tags}
                addKeys={[188,186]}
                onChange={this.handleChange.bind(this)}
                addOnBlur={true}
                inputValue={this.state.tag}
                onChangeInput={this.handleInputChange.bind(this)}
                maxTags={10}
                onlyUnique={true}
                preventSubmit={true}
                onSubmit={this.handleSubmit.bind(this)}
                />
    }
}


export default connect((state) => {
    return state.searchReducer;
})(withRouter(Tags));