import axios from 'axios';

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
        case 'LOADING' :
          console.log('LOADING')
            state = {
                ...state,
                loading: true,
                success: false
            };
        break;
        case 'LOADED' :
            console.log('LOADED');
            console.log(action.payload);
            state = {
                ...state,
                loading: false,
                success: true,
                results: action.payload.data // Not sure why it's so deep like this but this gives the actual results
            };
        break;
        case 'FAILED' :
            state = {
                ...state,
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
        break;
        case 'SEARCH_SUBMIT' :
            state = {
                ...state,
                query: action.payload
            };
        break;
        case 'SEARCH_CHANGE' :
            state = {
                ...state,
                query: action.payload
            };
        break;
        default:
            state = initialState;
    }
    return state;
}

// get Search results with this action, separated by the combined above
export function getSearch (id) {
    //return axios.get('https://mog-api.herokuapp.com/search/');
    console.log('getSearch Action Called')
    return {
        types: ['LOADING', 'LOADED', 'FAILED'],
        payload: {
          request: {
            url: 'https://mog-api.herokuapp.com/search/'
          }
        }
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