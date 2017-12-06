import axios from 'axios';

import { getUserData } from "./searchUser";

// Actions
const LOADING = 'myOp/search/LOADING';
const LOADED = 'myOp/search/LOADED';
const FAILED = 'myOp/search/FAILED';

const initialState = {
    loading: true,
    success: false,
    payload: {}
}

export default function searchReducer(state = initialState, action = '') {
    switch (action.type)
    {
        case LOADING :
          console.log('LOADING')
            return {
                ...state,
                loading: true,
                success: false
            };
        case LOADED :
            console.log('LOADED');
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                success: true,
                payload: action.payload // Not sure why it's so deep like this but this gives the actual results
            };
        case FAILED :
            return {
                ...state,
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
        case 'SEARCH_SUBMIT' :
            return {
                ...state,
                query: action.payload
            };
        case 'SEARCH_CHANGE' :
            return {
                ...state,
                query: action.payload
            };
        default:
            return state;
    }
}

// get Search results with this action, separated by the combined above
export function getSearch (id) {
    //return axios.get('https://mog-api.herokuapp.com/search/');
    console.log('getSearch Action Called')
    return (dispatch, getState) => {
      dispatch({
        types: [LOADING, LOADED, FAILED],
        payload: {
          request: {
            url: 'https://mog-api.herokuapp.com/search/'
          }
        }
      }).then(() => {
        dispatch(getUserData('CUS123456789')) // @TODO - REMIVE HARD CODED VALUE
        // The above promise has resolved. We now need to go fetch the customer with the ID provided
      })
    }
};

export function onSubmit (value) {
    return {
        type: 'SEARCH_SUBMIT',
        query: value
    };
};

export function onChange (value) {
    return {
        type: 'SEARCH_CHANGE',
        query: value
    };
};