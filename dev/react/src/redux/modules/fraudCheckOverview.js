import axios from 'axios';
import { authorise } from './auth';
import { fraudCheckOrders, postOrderNoteEndpoint, orderStatusUpdateEndpoint } from '../../constants/endpoints'


import buildQueryUrl from '../../helpers/buildQueryUrl'
import { getCustomer, getOrders } from './customers'
import fraudCheckOrderData from '../../mock-data/fraud-check-orders'
// Actions
const LOADING_LIST = 'myOp/fraudCheckOverviewList/LOADING';
const LOADED_LIST = 'myOp/fraudCheckOverviewList/LOADED';
const FAILED_LIST = 'myOp/fraudCheckOverviewList/FAILED';

const LOADING_ORDER = 'myOp/fraudCheckOverviewList/LOADING';
const LOADED_ORDER = 'myOp/fraudCheckOverviewList/LOADED';
const FAILED_ORDER = 'myOp/fraudCheckOverviewList/FAILED';

const UPDATE_ORDER = 'myOp/fraudCheckOverviewList/UPDATE_ORDER'
const REJECT_ORDER = 'myOp/fraudCheckOverviewList/REJECT_ORDER'

const POST_ORDER_NOTE = 'myOp/orderNotes/POST_NOTE'

const initialState = {
    loading: true,
    success: false,
    orderLoading: false,
    orderSuccess: false,
    payload: {}
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
        console.log(action.payload.data)
            return {
                ...state,
                loading: false,
                success: true,
                payload: action.payload.data, // Not sure why it's so deep like this but this gives the actual results
                currentOrderRef: action.payload.data.results[0].order_reference // on the basis whenever the list updates the order showed is the first in the list
            };
        case FAILED_LIST :
            return {
                ...state,
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
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
            orderSuccess: false,
            orderPayload: {
              message: action.payload.message
            }
          }
        case 'FRAUD_ORDER_FULFILLED' :
          return {
            ...state,
            orderLoading: false,
            orderSuccess: true,
            orderPayload: action.payload
          }
        case 'FRAUD_LIST_FILTER' :
        console.log('FRAUD LIST FILTER')
        console.log(action)
          return {
            ...state,
            fraudFilter: action.fraudFilter
          }
        default:
            return state;
    }
}

export function upateFilter (filterValue) {
  return (dispatch) => {
    dispatch({
      type: 'FRAUD_LIST_FILTER',
      fraudFilter: filterValue
    })
  }
}

// get Search results with this action, separated by the combined above
export function getFraudCheckList (queryParams = {}) {

  /* @NOTE - getFraudCheckList API
   * Method: Get
   * Swagger: https://app.swaggerhub.com/apis/MyOptiqueGroup/mbf-order-api/1.0.3#/Orders/get_fraud_check_orders
   * Pass queryParams object when calling this method to get the correct results
   */

  const queryUrl = buildQueryUrl(fraudCheckOrders, queryParams)

  // @todo - PUT BACK WHEN THE API IS WORKING CORRECTLY
  return (dispatch, getState) => {

    if (!getState().authReducer.authToken) {

      console.log('NOT AUTHORISED')

      return dispatch(authorise()).then(() => {

        return dispatch({
          types: [LOADING_LIST, LOADED_LIST, FAILED_LIST],
          payload: {
            request: {
              url: queryUrl,
              headers: {'Authorization': 'Bearer ' + getState().authReducer.authToken}
            }
          }
        }).then((result) => {
          // @TODO - Check if offset is zero. If so we need to load the first customer and order details
          console.log(result)
          dispatch(getFraudCheckListOrder(result.payload.data.results[0].customer_reference))
          // Also get customer data
        })

      });

    } else {

      return dispatch({
        types: [LOADING_LIST, LOADED_LIST, FAILED_LIST],
        payload: {
          request: {
            url: queryUrl,
            headers: {'Authorization': 'Bearer ' + getState().authReducer.authToken}
          }
        }
      }).then((result) => {
        // @TODO - Check if offset is zero. If so we need to load the first customer and order details
        console.log(result)
        dispatch(getFraudCheckListOrder(result.payload.data.results[0].customer_reference))
      })

    }

};
}

// Get details on the list item currently being hovered over
export function getFraudCheckListOrder (id, orderRef) {

  /* @NOTE Fetch User and Order Details
   * Call getCustomer & getOrders from the customers reducer which just returns the data then
   * put it into this reducer
   */
  let testid = 'CUS123456789' /* @TODO - MAKE THIS DYNAMIC */
  console.log('CHECKLIST ORDER')
  return (dispatch) => {
    dispatch({
      type: 'FRAUD_ORDER',
      payload: axios.all([getCustomer(testid), getOrders(id)])
    })
  }

}

// @TODO - Move somewhere else as this can be used elsewhere
export function postOrderNote (noteObj) {

  return (dispatch, getState) => {
    dispatch({
      type: POST_ORDER_NOTE,
      payload: {
        request: {
          url: postOrderNoteEndpoint,
          headers: {'Authorization': 'Bearer ' + getState().authReducer.authToken},
          method: 'POST',
          data: noteObj
        }
      }
    })
  }
}


export function updateOrderStatus (noteObj, orderRef, actionType, fraudFilter) {
  console.log('FRAUD CHECK OVERVIEW - UPDATE ORDER STATUS')
  console.log(actionType)
  let status = '';

  switch(actionType) {
    case 'approve':
      status = 'FRAUD CHECK PASSED';
      break;
    case 'decline':
      status = 'FRAUD CHECK FAILED';
      break;
    case 'contact':
      status = 'FRAUD CHECK CONTACTED';
      break;
  }

  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_ORDER,
      payload: {
        request: {
          url: orderStatusUpdateEndpoint,
          headers: {'Authorization': 'Bearer ' + getState().authReducer.authToken},
          method: 'POST',
          data: {
            "order_reference": orderRef,
            "status_code": status
          }
        }
      }
    }).then(() => {
      console.log('THEN')
      if (noteObj.content.length > 1) {
        dispatch(postOrderNote(noteObj));
      }
      dispatch(getFraudCheckList({
        status: fraudFilter
      }))
    })
  }
}