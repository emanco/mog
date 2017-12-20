import axios from 'axios';
import { authorise } from './auth';

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

const APPROVE_ORDER = 'myOp/fraudCheckOverviewList/APPROVE_ORDER'
const REJECT_ORDER = 'myOp/fraudCheckOverviewList/REJECT_ORDER'

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
        default:
            return state;
    }
}

// get Search results with this action, separated by the combined above
export function getFraudCheckList (queryParams = {}) {

  /* @NOTE - getFraudCheckList API
   * Method: Get
   * Swagger: https://app.swaggerhub.com/apis/MyOptiqueGroup/mbf-order-api/1.0.3#/Orders/get_fraud_check_orders
   * Pass queryParams object when calling this method to get the correct results
   */

  const queryUrl = buildQueryUrl('http://mbfoa.dev2.glassesdirecttesting.co.uk/api/v1/fraud-check-orders', queryParams)

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
          // dispatch(getFraudCheckListOrders(result.payload.data[0].results[0].customer_reference))
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
        // dispatch(getFraudCheckListOrders(result.payload.data[0].results[0].customer_reference))
        dispatch(getFraudCheckListOrder(result.payload.data.results[0].customer_reference))
        // Also get customer data
      })

    }

};


  /*
    console.log('GET FRAUD CHECKLIST')
    return (dispatch, getState) => {
      console.log(getState().authReducer.authToken)
      dispatch({
        type: LOADED_LIST,
        payload: fraudCheckOrderData
      })
      //MOCKED DATA
      dispatch(getFraudCheckListOrder('CUS123456789', 'ORD001132422'))
    } */
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
      payload: axios.all([getCustomer(testid), getOrders(testid)])
    })
  }

}

export function approveOrder (orderId) {
  return (dispatch) => {
    dispatch({
      type: APPROVE_ORDER,
      payload: {
        request: {
          url: 'http://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.3/order-status-updates/',
          headers: {'Authorization': 'omsfire'},
          method: 'POST',
          data: {
            "order_reference": "ORD000123456",
            "status_code": "FRAUD CHECK APPROVE"
          }
        }
      }
    }).then(() => {
      console.log('THEN')
      getFraudCheckList()
    })
  }
}

export function declineOrder (orderId) {
  return (dispatch) => {
    dispatch({
      type: REJECT_ORDER,
      payload: {
        request: {
          url: 'http://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.3/order-status-updates/',
          headers: {'Authorization': 'omsfire'},
          method: 'POST',
          data: {
            "order_reference": "ORD000123456",
            "status_code": "FRAUD CHECK DECLINE"
          }
        }
      }
    }).then(() => {
      console.log('THEN')
      getFraudCheckList()
    })
  }
}
