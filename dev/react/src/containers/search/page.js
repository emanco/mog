import React, { Component } from 'react';

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SearchResults from "../../components/SearchResults/SearchResults";
import SearchUser from "../../components/SearchUser/SearchUser";
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
        console.log('id is '+this.props.match.params.searchid);
        this.props.getSearch(this.props.match.params.searchid);

        //TODO: refactor actions into getData for right side page and getSearch for left side!
        //this.props.dispatch(getUser(this.props.match.params.searchid));

        //let $searchid= this.props.match.params.searchid;
        //this.props.dispatch(getSearch($searchid));

      // Don't care about pre-loading data,
    }

    handleChange(id) {
        console.log('new id to load is: '+id);

        //calling child function
        this.props.onChange(id);
    }


  render() {

      let $id = this.props.match.params.searchid;
          //$searchData = this.props.payload.data[0];
      console.log('HERE ------------------')
      console.log(this.props.userData);
      return (


          <div>
              {/*<BreadcrumbsComponent number={$searchData.hits.hit.length} path={this.props.location.pathname} query={$id}/>*/}
              <Breadcrumbs number={this.props.getNumber} path={this.props.location.pathname} query={$id} onRef={ref => (this.bread = ref)}/>

              <div className="left-panel">
                <SearchResults searchid={$id} change={this.handleChange} data={this.props.searchResultsData} />
              </div>

              <div className="right-panel">
                <SearchUser onRef={ref => (this.user = ref)} id={$id} data={this.props.userData}/>
              </div>


              {/*<div className="right-panel">*/}

                  {/*<CustomerInfo customerid={$id} data={this.props.payload[0].data}/>*/}

                  {/*<section className="component component-customer-orders row">*/}
                      {/*<h2 className="heading2 heading">*/}
                          {/*Orders*/}
                          {/*<button className="btn -add">Place Order</button>*/}
                      {/*</h2>*/}
                      {/*<p className="sub-text">Showing {this.props.payload[1].data[0].limit} of {this.props.payload[1].data[0].count} </p>*/}

                      {/*{this.props.payload[1].data[0].results.map(function(order, i) {*/}
                          {/*return <CustomerOrderComponent key={i} id={i} customerid={$id} data={order} />*/}
                      {/*})}*/}

                  {/*<button className="btn">View More</button>*/}
                  {/*</section>*/}

                 {/*<CustomerPrescriptionComponent customerid={$id} data={this.props.payload[2].data} name={this.props.payload[0].data.first_name+' '+this.props.payload[0].data.last_name} />*/}

              {/*</div>*/}


          </div>

      );
  }
}

export default Searchpage;


/*export default connect((state) => {
    return state.searchReducer;
})(Searchpage);*/