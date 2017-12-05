import axios from 'axios';

// Actions
const LOADING = 'myOp/searchUser/LOADING';
const LOADED = 'myOp/searchUser/LOADED';
const FAILED = 'myOp/searchUser/FAILED';


export default function userReducer(state = {}, action = '') {
    switch (action.type)
    {

        case 'LOADING' :
            console.log('SEARCH USER LOADING');
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'LOADED' :
            //console.log(action.payload);
            state = {
                loading: false,
                success: true,
                payload: action.payload
            };
            break;
        case 'FAILED' :
            state = {
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
            break;
        default:
            state = {};
            break;
    }

    return state;
}


// declare all API calls for left hand side
export function getCustomer (id=1) {
    //return loader.get('customers/'+id+'/customer-summary/');
    return axios.get('https://mog-api.herokuapp.com/customer-summary/'+id);
};

export function getOrders (id) {
    //return loader.get('customers/'+id+'/customer-summary/', );
    // user heroku for the time being until swagger is okay to go
    return axios.get('https://mog-api.herokuapp.com/orders/');
};

export function getPrescriptions (id) {
    return axios.get('https://mog-api.herokuapp.com/prescriptions/')
};

// combine them here into a single action
export function getUserData (id) {
    return {
        types: ['LOADING', 'LOADED', 'FAILED'], // use a THUNK, send three actions across
        payload: axios.all([getCustomer(id), getOrders(id), getPrescriptions(id)])
    }
};
