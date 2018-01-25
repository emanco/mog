import React, { Component } from 'react';

import { StickyBar, SearchResults, SearchUser } from '../../components';
import { connect } from 'react-redux';

import * as SearchActions from '../../redux/modules/search'
import * as SearchUserActions from '../../redux/modules/searchUser'

@connect(
  (state, ownProps) => ({
    searchResultsData: state.searchReducer.payload.data,
    userData: state.userReducer.payload
  }),
  {...SearchActions, ...SearchUserActions}
)

class Searchpage extends Component {

    constructor (props) {
        super(props);
        console.log(props)
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.props.getSearch(this.props.params.searchid);
    }

    handleChange(id) {
        console.log('new id to load is: '+id);
        this.props.onChange(id);
    }


  render() {
    let $id = this.props.params.searchid;
    return (
    <div>
        <StickyBar number={this.props.getNumber} path={this.props.location.pathname} query={$id} onRef={ref => (this.bread = ref)}/>

        <div className="left-panel">
          <SearchResults searchid={$id} change={this.handleChange} data={this.props.searchResultsData} />
        </div>

        <div className="right-panel">
          {/*<SearchUser onRef={ref => (this.user = ref)} id={$id} data={this.props.userData}/>*/}
        </div>
    </div>
    );
  }
}

export default Searchpage;