import axios from 'axios';

// Actions
const USER_RESULTS_PENDING = 'myOp/searchUser/LOADING';
const USER_RESULTS_FULFILLED = 'myOp/searchUser/LOADED';
const USER_RESULTS_REJECTED = 'myOp/searchUser/FAILED';

const initialState = {

}

export default function userReducer(state = {}, action = '') {
    switch (action.type)
    {

        case 'USER_RESULTS_PENDING' :
            console.log('SEARCH USER LOADING');
            return {
                ...state,
                loading: true,
                success: false
            };
        case 'USER_RESULTS_FULFILLED' :
            return {
                ...state,
                loading: false,
                success: true,
                payload: action.payload
            };
        case 'USER_RESULTS_REJECTED' :
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


// declare all API calls for left hand side
const getCustomer = (id = 1) => {
    return axios.get('https://mog-api.herokuapp.com/customer-summary/'+id)
}

const getOrders = (id) => {
    //return loader.get('customers/'+id+'/customer-summary/', );
    // user heroku for the time being until swagger is okay to go
    return axios.get('https://mog-api.herokuapp.com/orders/');
};

const getPrescriptions = (id) => {
    return axios.get('https://mog-api.herokuapp.com/prescriptions/')
};

// combine them here into a single action
const getUserData = (id) => {
  return {
      type: 'USER_RESULTS',
      payload: axios.all([getCustomer(id), getOrders(id), getPrescriptions(id)])
    }
};

export {getCustomer, getOrders, getPrescriptions, getUserData };
