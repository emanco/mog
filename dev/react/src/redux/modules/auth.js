import {authTokenEndpoint} from '../../constants/endpoints';
import { browserHistory } from 'react-router';

const initialState = {
    loading: true,
    success: false,
    authToken: null,
    loginRequired: true,
    formVisible: true,
    loggedIn: false
}

export default function authReducer(state = initialState, action = '') {
    switch (action.type)
    {
        case 'AUTH_PENDING' :
          console.log('AUTH LOADING')
            return {
                ...state,
                loading: true,
                success: false,
                error: false
            };
        case 'AUTH_FULFILLED' :
            console.log('AUTH LOADED');
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                authToken: action.payload.data['access_token'],
                loggedIn: true
            };
        case 'AUTH_REJECTED' :
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                loginRequired: true,
                formVisible: true,
                loggedIn: false,
                payload: {
                    message: action.payload
                }
            };
        case 'SET_AUTHORISED':
            return {
              ...state,
              loggedIn: action.payload.loggedIn
            }
        case 'LOG_OUT':
          return {
            ...state,
            loggedIn: action.payload.loggedIn
          }
        default:
            return state;
    }
}

// get Search results with this action, separated by the combined above
export function authorise () {
  //return axios.get('https://mog-api.herokuapp.com/search/');
  console.log('AUTHORISE')
  return (dispatch, getState) => {
    return dispatch({
      types: ['AUTH_PENDING', 'AUTH_FULFILLED','AUTH_REJECTED'],
      payload: {
        request: {
          method: 'post',
          url: authTokenEndpoint,
          data: {
            grant_type: 'password',
            username: 'plugandplay',
            password: 'november55',
            client_id: '1d1iLrbz7pmuObdMZ4mwcoAB4GuWHPorvfmpQ7Pq',
            client_secret: '714dE2J2opmlevocDfz4XjIWzpih0uoWHYM8TNSYV7LYILZczbrvQcjRSSMvp0GtZ6BJRJQCDip44lqFuBZr0U4zk6vOrM1iJeOL1ohSxNDuKQHdKHMifFCMaT7E2xH0'
          }
        }
      }
    })
  }
};

export function login (user, pass) {
  //return axios.get('https://mog-api.herokuapp.com/search/');
  console.log('AUTHORISE')
  return (dispatch, getState) => {
    return dispatch({
      types: ['AUTH_PENDING', 'AUTH_FULFILLED','AUTH_REJECTED'],
      payload: {
        request: {
          method: 'post',
          url: authTokenEndpoint,
          data: {
            grant_type: 'password',
            username: user,
            password: pass,
            client_id: '1d1iLrbz7pmuObdMZ4mwcoAB4GuWHPorvfmpQ7Pq',
            client_secret: '714dE2J2opmlevocDfz4XjIWzpih0uoWHYM8TNSYV7LYILZczbrvQcjRSSMvp0GtZ6BJRJQCDip44lqFuBZr0U4zk6vOrM1iJeOL1ohSxNDuKQHdKHMifFCMaT7E2xH0'
          }
        }
      }
    }).then((res) => {
      // The response is a success. For now just go back one in history
      if (res.type === 'AUTH_FULFILLED') {

        window.localStorage.setItem('jwtToken', res.payload.data['access_token'])

        setTimeout(() => {
          browserHistory.push('/');
        }, 1000)

      } else {
        console.log('Login Failed')
      }

    })
  }
};

export function isAuthorised() {
  const token = window.localStorage.getItem('jwtToken');
  let loggedInStatus = token ? true : false;

  console.log(loggedInStatus)

  return (dispatch) => {
    dispatch({
      type: 'SET_AUTHORISED',
      payload: {
        loggedIn: loggedInStatus
      }
    })

    if (!loggedInStatus) {
        browserHistory.push('/login');
      }
  }
}

export function logOut() {
  return (dispatch) => {
    dispatch({
      type: 'LOG_OUT',
      payload: {
        loggedIn: false
      }
    })

    window.localStorage.removeItem('jwtToken');
    browserHistory.push('/login')
  }
}

