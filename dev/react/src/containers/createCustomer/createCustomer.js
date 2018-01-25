import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Form, Text, TextArea, Select } from 'react-form';

import { StickyBar, SelectBox } from '../../components'
import titleSelectValues from '../../constants/titleSelectValues'

import * as createCustomerActions from '../../redux/modules/createCustomer'
import './../../scss/components/createCustomer.css'
import './../../scss/base/forms.css'


@connect(
  (state, ownProps) => ({
    addressLookupAddresses: state.createCustomerReducer.addressLookup,
  }),
  {...createCustomerActions}
)

export default class createCustomer extends Component {

  constructor(props) {
    super(props)

    this.lookupAddress = this.lookupAddress.bind(this)
    this.handleAddressSelected = this.handleAddressSelected.bind(this)
    this.toggleLookupAddress = this.toggleLookupAddress.bind(this)
    this.state = {
      lookupAddress: false,
      showAddressFields: false
    }
  }

  setApi = (api) => {
    // sets a reference to the formAPI that can be accessed by the rest of the component. This
    // is the susggested method for react-form.
    this.formApi = api;
  }

  handleAddressSelected = (value) => {
    this.formApi.setAllValues({
      address1: this.props.addressLookupAddresses[value].line1,
      address2: this.props.addressLookupAddresses[value].line2,
      address3: this.props.addressLookupAddresses[value].line3,
      town: this.props.addressLookupAddresses[value].city,
      county: this.props.addressLookupAddresses[value].county,
      postcode: this.postcodeLookup.context.formApi.values['postcode-lookup']
    })

    this.toggleLookupAddress()
  }

  lookupAddress = () => {
    this.setState({
      lookupAddress: true
    })
    this.props.lookupAddress(this.postcodeLookup.context.formApi.values['postcode-lookup']);
  }

  toggleLookupAddress = () => {
    this.setState({
      lookupAddress: false
    })
  }

  render() {

    return(
      <div>
        <StickyBar path={this.props.location.pathname}/>

        <div className="create-customer row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-3 create-customer-initials">
                <div className="user-initials">TC</div>
              </div>
              <div className="col-md-9 create-customer-right">
                <div className="create-customer-form">
                  <Form getApi={(api) =>{ this.setApi( api) }} onSubmit={submittedValues => this.setState( { submittedValues } )}>
                    { formApi => (
                      <form onSubmit={formApi.submitForm}>
                        <div className="form-element">
                          <label htmlFor="first-name">Title</label>
                          <Select field="title" id="title" options={titleSelectValues} className="form-control" />
                        </div>

                        <div className="form-element">
                          <label htmlFor="first-name">First Name</label>
                          <Text field="first-name" name="first-name" className="form-control"/>
                        </div>

                        <div className="form-element">
                          <label htmlFor="last-name">Last Name</label>
                          <Text field="last-name" name="last-name" className="form-control"/>
                        </div>

                        <div className="form-element">
                          <label htmlFor="email">Email</label>
                          <Text field="email" name="email" className="form-control"/>
                        </div>

                        <div className="form-element">
                          <label htmlFor="home-phone">Home Number</label>
                          <Text field="home-phone" name="home-phone" className="form-control"/>
                        </div>

                        <div className="form-element">
                          <label htmlFor="mobile-phone">Mobile Number</label>
                          <Text field="mobile-phone" name="mobile-phone" className="form-control"/>
                        </div>

                        <div className="address-finder">
                          <h4 className="h4">Address</h4>
                          <div className="form-element">
                            <label htmlFor="address1">Enter or postcode or address line</label>
                            <Text field="postcode-lookup" name="postcode-lookup" className="postcode-lookup form-control" ref={(input) => { this.postcodeLookup = input;}}/>
                            {this.props.addressLookupAddresses.length > 0 &&
                              <Select field="address-pick" title="address-pick" options={this.props.addressLookupAddresses} className="form-control" onChange={this.handleAddressSelected}/>}
                            <button className="btn -blue" onClick={this.lookupAddress}>Find address</button>
                          </div>
                        </div>

                        {this.state.showAddressFields &&
                          <div className="address-wrap">
                          <div className="form-element">
                            <label htmlFor="address1">Address 1</label>
                            <Text field="address1" name="address1" className="form-control" ref={(input) => { this.address1 = input } }/>
                          </div>

                          <div className="form-element">
                            <label htmlFor="address2">Address 2</label>
                            <Text field="address2" name="address2" className="form-control" ref={(input) => { this.address2 = input } }/>
                          </div>

                          <div className="form-element">
                            <label htmlFor="address3">Address 3</label>
                            <Text field="address3" name="address3" className="form-control" ref={(input) => { this.address3 = input } }/>
                          </div>

                          <div className="form-element">
                            <label htmlFor="town">Town</label>
                            <Text field="town" name="town" className="form-control" ref={(input) => { this.town = input } }/>
                          </div>

                          <div className="form-element">
                            <label htmlFor="county">County</label>
                            <Text field="county" name="county" className="form-control" ref={(input) => { this.county = input } }/>
                          </div>

                          <div className="form-element">
                            <label htmlFor="country">Country</label>
                            <Text field="country" name="country" className="form-control" ref={(input) => { this.country = input } }/>
                          </div>

                          <div className="form-element">
                            <label htmlFor="postcode">Postcode</label>
                            <Text field="postcode" name="postcode" className="form-control"  ref={(input) => { this.postcode = input } }/>
                          </div>
                        </div>}

                        <div>
                          <label htmlFor="notes" className="h4">Notes</label>
                          <div className="form-element">
                            <TextArea field="notes" id="notes" className="form-control"/>
                          </div>
                        </div>

                        <div>
                          <div className="form-element">
                            <button className="btn -blue">Save customer</button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="">Already Exists</div>
          </div>
        </div>

      </div>
    )
  }
}