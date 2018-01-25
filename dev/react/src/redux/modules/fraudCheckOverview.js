import axios from 'axios';
import { fraudCheckOrders, postOrderNoteEndpoint, orderStatusUpdateEndpoint } from '../../constants/endpoints'
import fraudStatusValues from '../../constants/fraudStatusValues'
import buildQueryUrl from '../../helpers/buildQueryUrl'
import { getCustomer, getOrders } from './customers'
import checkCallSuccess from '../../helpers/checkCallSuccess'
import * as AuthActions from './auth'
// Actions
const LOADING_LIST = 'myOp/fraudCheckOverviewList/LOADING'
const LOADED_LIST = 'myOp/fraudCheckOverviewList/LOADED'
const FAILED_LIST = 'myOp/fraudCheckOverviewList/FAILED'
const UPDATE_ORDER = 'myOp/fraudCheckOverviewList/UPDATE_ORDER'
const POST_ORDER_NOTE = 'myOp/orderNotes/POST_NOTE'

const initialState = {
    loading: true,
    success: false,
    orderLoading: false,
    orderSuccess: false,
    payload: {},
    fraudStatus: fraudStatusValues[0].value
}

export default function fraudCheckOverviewReducer(state = initialState, action = '') {
    switch (action.type)
    {
        case LOADING_LIST :
            return {
                ...state,
                loading: true,
                success: false
            };
        case LOADED_LIST :
            let ref = null;
            if (action.payload.data.results[0]) {
              ref = action.payload.data.results[0].order_reference;
            }
            return {
                ...state,
                loading: false,
                success: true,
                payload: action.payload.data,
                currentOrderRef: ref
            };
        case FAILED_LIST :
            return {
                ...state,
                loading: false,
                success: false
            };
        case 'FRAUD_ORDER_PENDING' :
          return {
            ...state,
            orderLoading: true,
            orderSuccess: false
          }
        case 'FRAUD_ORDER_FAILED' :
          return {
            ...state,
            orderLoading: false,
            orderSuccess: false
          }
        case 'FRAUD_ORDER_FULFILLED' :
          return {
            ...state,
            orderLoading: false,
            orderSuccess: true,
            orderPayload: action.payload
          }
        case 'FRAUD_LIST_STATUS_CHANGE' :
          return {
            ...state,
            fraudStatus: action.fraudStatus
          }
        case 'FRAUD_LIST_FILTER_CHANGE' :
          return {
            ...state,
            fraudFilter: action.fraudFilter
          }
        case 'CURRENT_ORDER_REFERENCE' :
          return {
            ...state,
            currentOrderRef: action.currentOrderRef,
            currentOrderDate: action.currentOrderDate
          }
        default:
            return state;
    }
}

export function upateStatus (statusValue) {
  return (dispatch, getState) => {
    const filterValue = getState().fraudCheckOverviewReducer.fraudFilter;

    dispatch({
      type: 'FRAUD_LIST_STATUS_CHANGE',
      fraudStatus: statusValue
    })

    const params = {
      status: statusValue
    }

    if (filterValue) {
      params[filterValue] = true
    }

    dispatch(getFraudCheckList(params))
  }
}

export function updateFilter (filterValue) {
  console.log(filterValue)

  return (dispatch, getState) => {

    const statusValue = getState().fraudCheckOverviewReducer.fraudStatus

    let params = {
      status: statusValue,
      [filterValue]: true
    }

    dispatch({
      type: 'FRAUD_LIST_FILTER_CHANGE',
      fraudFilter: filterValue
    })

    dispatch(getFraudCheckList(params))
  }
}

export function updateOrderRef (order) {
  return (dispatch) => {
    dispatch({
      type: 'CURRENT_ORDER_REFERENCE',
      currentOrderRef: order.order_reference,
      currentOrderDate: order.placed_at
    })
  }
}



// call the fraud check API if successful, fetch customer and order details associated with the first result
export const getFraudCheckList = (queryParams = {}) => {
  const queryUrl = buildQueryUrl(fraudCheckOrders, queryParams)

  return (dispatch, getState) => {
     return dispatch({
        types: [LOADING_LIST, LOADED_LIST, FAILED_LIST],
        payload: {
          request: {
            url: queryUrl,
            headers: {Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')}
          }
        }
      }).then((result) => {
        checkCallSuccess(result.type, () => {
          // If the check passes, the call was successful which means the API is up and we're authorised. Now check there is at least one result
          if (result.payload.data.count > 0) {
            // fetch data on the first order
            dispatch(getFraudCheckListOrder(null, result.payload.data.results[0].customer_reference))
          }
        }, () => {
          // API call failed. Log out the user and redirect them to the login page
          // this doesn't allow for the API being down at present.
          dispatch(AuthActions.logOut())
        });

      })
  }
}

export const getFraudCheckListPaginated = (params) => {
  return (dispatch,getState) => {

    const filter = getState().fraudCheckOverviewReducer.fraudFilter;
    const status = getState().fraudCheckOverviewReducer.fraudStatus;
    const paginatedParams = {
      offset: params.offset,
      limit: params.limit
    };

    if (filter) {
      paginatedParams[filter] = true
    }
    if (status) {
      paginatedParams.status = status
    }

    dispatch(getFraudCheckList(paginatedParams))
  }
}

// Get details on the list item currently being hovered over
export function getFraudCheckListOrder (orderRef, custId, order) {

  /* @NOTE Fetch User and Order Details
   * Call getCustomer & getOrders from the customers module which just returns the data without * modifying the application state, then put it into this reducers state
   */

  return (dispatch, getState) => {
    dispatch({
      type: 'FRAUD_ORDER',
      payload: axios.all([getCustomer(custId), getOrders(custId)])
    }).then((result) => {

      // check result. We don't need a success callback, but log out if it fails
      checkCallSuccess(result.action.type, () => {
        if (order){
          // if we have been passed an order, dispatch an action to update Order reference
          dispatch(updateOrderRef(order))
        }
      }, () => {dispatch(AuthActions.logOut())});
    })
  }

}

// @TODO - Move somewhere else as this can be used elsewhere. It's not tied to
// fraudCheckOverview
export function postOrderNote (noteObj) {

  return (dispatch, getState) => {
    dispatch({
      type: POST_ORDER_NOTE,
      payload: {
        request: {
          url: postOrderNoteEndpoint,
          headers: {Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')},
          method: 'POST',
          data: noteObj
        }
      }
    })
  }
}

// Update the status of the order when the user modifies it in the browser.
//
export function updateOrderStatus (noteObj, orderRef, actionType, fraudStatus) {

  /**
   * noteObj - object that contains the note details being posted
   * orderRef - the order reference the note applies too
   * actionType - the action returned by the reducer
   * fraudStatus - passed
   */
  let status = '';

  switch(actionType) {
    case 'approve':
      status = 'FRAUD CHECK PASSED';
      break;
    case 'decline':
      status = 'FRAUD CHECK FAILED';
      break;
    case 'contact':
      status = 'FRAUD CHECK CUSTOMER CONTACTED';
      break;
    default:
      status = 'FRAUD CHECK PASSED';
      break;
  }

  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_ORDER,
      payload: {
        request: {
          url: orderStatusUpdateEndpoint,
          headers: {Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')},
          method: 'POST',
          data: {
            "order_reference": orderRef,
            "status_code": status
          }
        }
      }
    }).then(() => {
      if (noteObj.content.length > 1) {
        dispatch(postOrderNote(noteObj));
      }
      dispatch(getFraudCheckList({
        status: fraudStatus
      }))
    })
  }
}