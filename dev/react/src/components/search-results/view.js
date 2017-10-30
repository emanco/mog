import React, { Component } from 'react';
import { connect } from 'react-redux';

import {getUser} from "../../pages/search/actions";

class SearchResultView extends Component {

    constructor() {
        super();
        this.state = {};

        this.onHover = this.handleHover.bind(this);
    }

    handleHover = (event) => {
        console.log('hovering'+ event.target.id);
        let $targetid = parseInt(event.target.id)+1;

        console.log('targetid '+$targetid);

        this.props.dispatch(getUser(this.props.searchid, $targetid));

    };

    render() {

        if (this.props.searchid === undefined) {
            return (
                <div>
                    No Search Results found! Use the form above.
                </div>
            );
        } else {

            let $this = this;

            return (
                <div>
                    {this.props.data[0].hits.hit.map(function(result, i) {
                        return (

                            <div className="row component card" key={i} >
                                    <div className="col-sm-12" >
                                        <p className="heading2">
                                            {result.fields.customer_first_name} {result.fields.customer_last_name}
                                        </p>
                                        <p className="sub-text">
                                            {result.fields.customer_id} | {result.fields.customer_billing_postcode}
                                        </p>
                                        <p className="col-sm2 text-right" onClick={$this.onHover} >
                                            <i className="ion-more actions" id={i}/>
                                        </p>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            )
        }
    }
}

//export default SearchResultView;

export default connect((state) => {
    return state.searchReducer;
})(SearchResultView);