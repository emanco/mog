// Actions
const LOADING_LIST = 'myOp/fraudCheckOverviewList/LOADING';
const LOADED_LIST = 'myOp/fraudCheckOverviewList/LOADED';
const FAILED_LIST = 'myOp/fraudCheckOverviewList/FAILED';

const LOADING_ORDER = 'myOp/fraudCheckOverviewList/LOADING';
const LOADED_ORDER = 'myOp/fraudCheckOverviewList/LOADED';
const FAILED_ORDER = 'myOp/fraudCheckOverviewList/FAILED';

const initialState = {
    loading: true,
    success: false,
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
            return {
                ...state,
                loading: false,
                success: true,
                payload: action.payload.data // Not sure why it's so deep like this but this gives the actual results
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
        default:
            return state;
    }
}

// get Search results with this action, separated by the combined above
export function getFraudCheckList () {
  return (dispatch, getState) => {
    dispatch({
      types: [LOADING_LIST, LOADED_LIST, FAILED_LIST],
      payload: {
        request: {
          url: 'https://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.3/fraud-check-orders/',
          headers: {'Authorization': 'omsfire'}
        }
      }
    })
  };
}

// Get details on the list currently being hovered over
export function getFraudCheckListOrder () {
  return (dispatch, getState) => {
    dispatch({
      types: [LOADING_ORDER, LOADED_ORDER, FAILED_ORDER],
      payload: {
        request: {
          url: 'https://mog-api.herokuapp.com/search/'
        }
      }
    })
  }
}
