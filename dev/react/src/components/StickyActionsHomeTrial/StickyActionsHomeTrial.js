import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hotkeys from 'react-hot-keys'
import Moment from 'react-moment'

import {FormDatePicker, SelectBox} from '../../components/'
import homeTrialStatusChangeValues from '../../constants/homeTrialStatusChangeValues'
import './../../scss/components/stickyActions.css'
import './../../scss/components/stickyActionsHomeTrial.css'

const updateDatesState = {
      status: 'open',
      action: 'updateDate',
      title: 'Update date',
      changeStatus: false,
      updateDate: true
    }

const statusChangeState = {
      status: 'open',
      action: 'statusChange',
      title: 'Change status',
      changeStatus: true,
      updateDate: false
    }

const closedState = {
      status: 'closed',
      action: '',
      noteValue: ''
    }

export default class StickyActionsHomeTrial extends Component {

  constructor(props) {
    super(props)

    this.handleClickUpdateDate = this.handleClickUpdateDate.bind(this)
    this.handleClickUpdateStatus = this.handleClickUpdateStatus.bind(this)

    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleShortcutSubmit = this.handleShortcutSubmit.bind(this)
    this.handleToggleForm = this.handleToggleForm.bind(this)
    this.handleKeyboardOpen = this.handleKeyboardOpen.bind(this)

    this.handleUpdateReturnDate = this.handleUpdateReturnDate.bind(this)
    this.handleUpdateChargeDate = this.handleUpdateChargeDate.bind(this)

    this.state = {
      status: 'closed',
      action: '',
      title: '',
      noteValue: '',
      newStatus: null,
      returnDate: this.props.currentReturnDate,
      chargeDate: this.props.currentChargeDate
    }

  }

  componentDidUpdate() {
    console.log(this.props.currentReturnDate)
    if (this.state.status === "open") {
      setTimeout(() => {
        this.textArea.focus();
      }, 200) // This needs to match the animation time set in CSS otherwise the view will jump
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.orderRef !== nextProps.orderRef) {
      this.setState({
        returnDate: nextProps.currentReturnDate,
        chargeDate: nextProps.currentChargeDate
      })
    }
  }

  handleClickUpdateDate = (orderRef) => {
    this.setState(updateDatesState)

    this.handleSubmit(orderRef)
  }

  handleClickUpdateStatus = (orderRef) => {
    this.setState(statusChangeState)

    this.handleSubmit(orderRef)
  }

  handleToggleForm = () => {
    this.textArea.blur();
    this.setState(closedState)
  }

  handleNoteChange = (event) => {
    this.setState({
      noteValue: event.target.value
    })
  }

  handleFilterChange = (value) => {
    this.setState({
      newStatus: value
    })
  }

  handleSubmit = (orderRef) => {
    // taking advtange of the react lifecycle here. Even though
    // we set status to be open, it isn't until the cycle is
    // complete so this will be false and it won't attempt to
    // post on the first click. There may be a better way

    // @TODO - Bug - handleSubmit is occuring when you click on any
    // button once open.
    if (this.state.status !== 'open') {
      return
    }

    const noteObj = {
      order_reference: orderRef,
      content: this.state.noteValue
    }

    if (this.state.action === 'updateDate') {
        // Call updateDate
        const dates = {}

        this.state.returnDate ? dates.return_due_at = this.state.returnDate : null;
        this.state.chargeDate ? dates.charge_due_at = this.state.chargeDate : null;

        this.props.updateDatesCallback(noteObj, dates)
      }

    if (this.state.action === 'statusChange') {
        // Call updateDate
        const status = {
          status: this.state.newStatus
        }
        this.props.updateOrderCallback(noteObj, this.state.newStatus)
      }

    this.setState(closedState)

  }

  handleShortcutSubmit = (keyName, e, handle) => {
    // Handles all actions and submits the action
    if (keyName === 'shift+return') {
      this.handleSubmit(this.props.orderRef)
    }
  }

  handleKeyboardOpen = (keyName, e, handle) => {
    switch(keyName) {
        case 'shift+u':
          this.setState(updateDatesState);
          break;
        case 'shift+s':
          this.setState(statusChangeState);
          break;
      default:
        return;
    }
  }

  // @TODO - DRY - One function for the two below accept a param that indicates which date is being updated
  handleUpdateReturnDate = (date) => {
    this.setState({
      returnDate: date
    })
  }

  handleUpdateChargeDate = (date) => {
    this.setState({
      chargeDate: date
    })
  }

  render() {
    const stateClass = this.state.status
    const actionClass = this.state.action

    return(
      <div className={'sticky-actions sticky-actions-homeTrial sticky-actions-' + stateClass + ' sticky-actions-' + actionClass}>
        <div className='sticky-actions-overlay' onClick={this.handleToggleForm}></div>
        <div className="stickyActions-form">
          <div className="stickyActions-form-title">
            <h3 className='h3'>{this.state.title}</h3>
          </div>

          {this.state.updateDate &&
            <div>
              <div className="updatePicker">
              <div className="updatePicker-field-wrap">
                <div className="form-element">
                  <label>Update return DUE Date</label>
                  <FormDatePicker
                    startDate={this.state.returnDate}
                    handleChangeUpdate={this.handleUpdateReturnDate}
                    />
                </div>
                <div className="form-element">
                  <label>Update change DUE date</label>
                  <FormDatePicker
                    startDate={this.state.chargeDate}
                    handleChangeUpdate={this.handleUpdateChargeDate}
                    />
                </div>
              </div>
            </div>
          </div>
          }
          {this.state.changeStatus &&
            <div className="homeTrial-changeStatus-dropdown">
              <SelectBox
                options={homeTrialStatusChangeValues}
                handleChange={this.handleFilterChange}
                placeholder='Change Status'
              />
            </div>
          }
            <textarea
              className="form-control stickyActions-comment"
              rows="2"
              onChange={this.handleNoteChange}
              placeholder="Enter Note..."
              value={this.state.noteValue}
              ref={(input) => { this.textArea = input; }}
              ></textarea>
        </div>
        <div className="stickyActions-controls">
          <div className="stickyActions-details">
            <div className="stickyActions-orderRef heading2">{this.props.orderRef}</div>
            <div className="stickyActions-meta">
              <Moment
                date={this.props.currentOrderDate}
                format="ddd Do MMM YYYY" />
            </div>
          </div>
          <div className="stickyActions-cta">
            <Hotkeys
              keyName="shift+return"
              onKeyUp={this.handleShortcutSubmit}>
              <Hotkeys
                keyName="shift+escape"
                onKeyUp={this.handleToggleForm}>
                <button
                  className="button btn-cancel"
                  onClick={this.handleToggleForm}>
                  Cancel
                </button>
              </Hotkeys>
              <Hotkeys
                keyName="shift+u"
                onKeyDown={this.handleKeyboardOpen}>
                <button
                  className="button btn-updateDate"
                  onClick={() => {this.handleClickUpdateDate(this.props.orderRef)}}>
                  Update Date
                </button>
              </Hotkeys>
              <Hotkeys
                keyName="shift+s"
                onKeyUp={this.handleKeyboardOpen}>
                <button className="button btn-updateStatus"
                  onClick={() => {this.handleClickUpdateStatus(this.props.orderRef)}}>
                  Change Status
                </button>
              </Hotkeys>
            </Hotkeys>
          </div>
        </div>
      </div>
    )
  }
}


StickyActionsHomeTrial.propTypes = {
  data: PropTypes.object,
  orderRef: PropTypes.string
}