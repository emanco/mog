import React, { Component } from 'react';

import BreadcrumbsComponent from "../../components/breadcrumbs/view";
import SearchResultComponent from "../../components/search-results/component";
import SearchUserComponent from "../../components/search-user/component";

class Searchpage extends Component {

    constructor () {
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        console.log('id is '+this.props.match.params.searchid);
        //this.props.dispatch(getData(this.props.match.params.searchid));

        //TODO: refactor actions into getData for right side page and getSearch for left side!
        //this.props.dispatch(getUser(this.props.match.params.searchid));

        //let $searchid= this.props.match.params.searchid;
        //this.props.dispatch(getSearch($searchid));
    }

    handleChange(id) {
        console.log('new id to load is: '+id);

        //calling child function
        this.user.onChange(id);
    }


  render() {


      let $id = this.props.match.params.searchid;
          //$searchData = this.props.payload.data[0];

      return (


          <div>
              {/*<BreadcrumbsComponent number={$searchData.hits.hit.length} path={this.props.location.pathname} query={$id}/>*/}
              <BreadcrumbsComponent number={this.props.getNumber} path={this.props.location.pathname} query={$id} onRef={ref => (this.bread = ref)}/>

              <div className="left-panel">
                  <SearchResultComponent searchid={$id} change={this.handleChange} />
              </div>

              <div className="right-panel">
                      <SearchUserComponent onRef={ref => (this.user = ref)} id={$id}/>
              </div>


              {/*<div className="right-panel">*/}

                  {/*<CustomerInfoComponent customerid={$id} data={this.props.payload[0].data}/>*/}

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