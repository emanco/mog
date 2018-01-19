import React, { Component } from 'react';

import './../../scss/components/createCustomer.css'
import './../../scss/base/forms.css'

export default class createCustomer extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
    }

  render() {
    return(
      <div className="create-customer">
        <div>Create Customer</div>
        <div className="form-element">
          <label for="first-name">First Name</label>
          <input type="text" name="first-name" className="form-control"/>
        </div>

        <div className="form-element">
          <label for="last-name">Last Name</label>
          <input type="text" name="last-name" className="form-control invalid"/>
        </div>

        <div className="form-element">
          <label for="first-name">Email</label>
          <input type="text" name="email" className="form-control"/>
        </div>

        <div className="form-element">
          <label for="first-name">Home Number</label>
          <input type="text" name="email" className="form-control"/>
        </div>

        <div className="form-element">
          <label for="first-name">Mobile Number</label>
          <input type="text" name="email" className="form-control"/>
        </div>

        <div className="form-element">
          <label for="address1">Address 1</label>
          <input type="text" name="address1" className="form-control"/>
        </div>
        <div className="form-element">
          <label for="address2">Address 2</label>
          <input type="text" name="address2" className="form-control"/>
        </div>
        <div className="form-element">
          <label for="address3">Address 3</label>
          <input type="text" name="address3" className="form-control"/>
        </div>
        <div className="form-element">
          <label for="town">Town</label>
          <input type="text" name="town" className="form-control"/>
        </div>
        <div className="form-element">
          <label for="county">County</label>
          <input type="text" name="county" className="form-control"/>
        </div>
        <div className="form-element">
          <label for="country">Country</label>
          <input type="text" name="country" className="form-control"/>
        </div>

        <div>
          <h4 className="h4">Notes</h4>
          <div className="form-element">
            <textarea></textarea>
          </div>
        </div>
      </div>
    )
  }
}