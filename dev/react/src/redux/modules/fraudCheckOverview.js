import axios from 'axios';
import { authorise } from './auth';
import { fraudCheckOrders, postOrderNoteEndpoint, orderStatusUpdateEndpoint } from '../../constants/endpoints'
import fraudStatusValues from '../../constants/fraudStatusValues';
import { browserHistory } from 'react-router'
import buildQueryUrl from '../../helpers/buildQueryUrl'
import { getCustomer, getOrders } from './customers'
import checkCallSuccess from '../../helpers/checkCallSuccess'
import * as AuthActions from './auth'
// Actions
const LOADING_LIST = 'myOp/fraudCheckOverviewList/LOADING';
const LOADED_LIST = 'myOp/fraudCheckOverviewList/LOADED';
const FAILED_LIST = 'myOp/fraudCheckOverviewList/FAILED';

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
        case 'FRAUD_LIST_FILTER' :
          return {
            ...state,
            fraudStatus: action.fraudStatus
          }
        default:
            return state;
    }
}

export function upateFilter (filterValue) {
  return (dispatch) => {
    dispatch({
      type: 'FRAUD_LIST_FILTER',
      fraudStatus: filterValue
    })
  }
}

// get Search results with this action, separated by the combined above
export const getFraudCheckList = (queryParams = {}) => {
console.log('GET FRAUD CHECK LIST');
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
       console.log(result)

        checkCallSuccess(result.type, () => {
          if (result.payload.data.count > 0) {
           dispatch(getFraudCheckListOrder(result.payload.data.results[0].customer_reference))
          }
        }, () => {dispatch(AuthActions.logOut())});

      })
  }
}

// Get details on the list item currently being hovered over
export function getFraudCheckListOrder (id, orderRef) {

  /* @NOTE Fetch User and Order Details
   * Call getCustomer & getOrders from the customers reducer which just returns the data then
   * put it into this reducer
   */
  console.log('CHECKLIST ORDER')
  return (dispatch, getState) => {
    dispatch({
      type: 'FRAUD_ORDER',
      payload: axios.all([getCustomer(id), getOrders(id)])
    }).then((result) => {
      console.log(result)
      // check result. We don't need a success callback, but log out if it fails
      checkCallSuccess(result.action.type, () => {}, () => {dispatch(AuthActions.logOut())});
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
          headers: {Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')},
          method: 'POST',
          data: noteObj
        }
      }
    })
  }
}


export function updateOrderStatus (noteObj, orderRef, actionType, fraudStatus) {
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