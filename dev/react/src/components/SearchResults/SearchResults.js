import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearch } from "./actions";

import * as SearchActions from './actions'
// CSS
import './../../scss/components/search-results.css';

@connect(
  state =>
    ({
      searchVisible: state.search.open,
    }),
    {...SearchActions}
)
export default class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.props.dispatch(getSearch(this.props.searchid));

        this.handleHover = this.handleHover.bind(this);
    }

    componentDidMount() {
        console.log('component did mount: '+this.props.payload.data[0].hits.hit[0].fields.customer_id);
        this.props.change(this.props.payload.data[0].hits.hit[0].fields.customer_id);  //emit the first userid to outside
    }

    handleHover = (event) => {
        console.log('hovering'+ event.target.id);
        let $targetid = parseInt(event.target.id,10)+1;

        console.log('targetid '+$targetid);

        this.props.change(event.target.id);  //emit the first userid to outside


        //this.props.dispatch(getUser(this.props.searchid, $targetid));
    };

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

        if (this.props.searchid === undefined) {
            return (
                <div>
                    No Search Results found! Use the form above.
                </div>
            );
        } else {

            let $this = this;

            return (
              <section className="component component-results">
                <div>
                    {this.props.payload.data[0].hits.hit.map(function(result, i) {
                        return (

                            <div className="row component card" key={i} >
                                    <div className="col-sm-12" id={i}>
                                        <a href={"../customers/"+result.fields.customer_id}>
                                            <p className="heading2">
                                                {result.fields.customer_first_name} {result.fields.customer_last_name}
                                            </p>
                                            <p className="sub-text">
                                                {result.fields.customer_id} | {result.fields.customer_billing_postcode}
                                            </p>
                                        </a>

                                        <p className="col-sm2 text-right" onMouseOver={$this.handleHover} >
                                            <i className="ion-more actions" id={result.fields.customer_id}/>
                                        </p>
                                    </div>
                                </div>
                        )
                    })}
                </div>
              </section>
            )
        }
    }
}
