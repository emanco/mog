import axios from 'axios';

// Actions
const LOADING = 'myOp/search/LOADING';
const LOADED = 'myOp/search/LOADED';
const FAILED = 'myOp/search/FAILED';

export default function userReducer(state = {}, action = '') {
    switch (action.type)
    {

        case 'LOADING' :
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

// get Search results with this action, separated by the combined above
export function getSearch (id) {
    //return axios.get('https://mog-api.herokuapp.com/search/');

    return {
        type: 'SEARCH_RESULTS',
        payload: axios.get('https://mog-api.herokuapp.com/search/')
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