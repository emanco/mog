// Common libraries
import React, { Component } from 'react'
import {PropTypes} from 'prop-types'
import getUserInitials from '../../helpers/userInitials'
class CustomerInfo extends Component {

    render() {
      console.log(this.props.data)
        if (!this.props.customerid) {
            return (
                <div>
                    No ID!
                </div>
            );
        } else {
            return (
                <div>
                    <section className="component component-customer-info row">
                        <div className="col-sm-3">
                            <div className="user-initials">{getUserInitials(this.props.data.first_name+' '+this.props.data.last_name)}</div>
                        </div>

                        <div className="col-sm-9">
                            <p className="heading1 heading">{this.props.data.first_name} {this.props.data.last_name}</p>

                            <div className="row">
                                <div className="col-sm-6 component-customer-info-email-phone">
                                    <p>{this.props.data.reference}</p>
                                    <p><a href={"mailto:"+this.props.data.email}>{this.props.data.email}</a></p>
                                    <p><a href={"tel:"+this.props.data.telephones.map(i=> {return (i.phone);})}>{this.props.data.telephones.map(i=> {return (i.phone);})}</a></p>
                                </div>

                                <div className="col-sm-6">
                                    <p>221B Baker Street</p>
                                    <p>London</p>
                                    <p>N17 1AB</p>
                                </div>
                            </div>

                            <p className="view-more"><a href="">View More</a></p>
                        </div>

                    {this.props.editable && <div className="btn -edit">Edit Profile</div>}

                    </section>
                </div>
            )
        }
    }
}

export default CustomerInfo;


CustomerInfo.propTypes = {

  data: PropTypes.object,
  /*
    Data - Holds all data used in the render method. It should be an object and is required
    or this component will fail
  */
  editable: PropTypes.bool
  /*
    Editable - Boolean flag to decide whether to show editable ontrols
  */
}