import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearch } from "../../redux/modules/search";

// CSS
import './../../scss/components/search-results.css';

export default class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        getSearch(this.props.searchid);

        this.handleHover = this.handleHover.bind(this);
        console.log('HERE')
        console.log(props)
    }

    componentDidMount() {
       // console.log('component did mount: '+this.props.data[0].hits.hit[0].fields.customer_id);
      // this.props.change(this.props.data[0].hits.hit[0].fields.customer_id);  //emit the first userid to outside
    }

    handleHover = (event) => {
        console.log('hovering'+ event.target.id);
        let $targetid = parseInt(event.target.id,10)+1;

        console.log('targetid '+$targetid);

        this.props.change(event.target.id);  //emit the first userid to outside


        //this.props.dispatch(getUser(this.props.searchid, $targetid));
    };

    render() {
        if (this.props.loading === true || typeof this.props.data === 'undefined') {
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
            console.log(this.props.data);
            return (
              <section className="component component-results">
                <div>
                {this.props.data[0].hits.hit.map(function(result, i) {
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
