// Actions
const LOADING = 'myOp/auth/LOADING';
const LOADED = 'myOp/auth/LOADED';
const FAILED = 'myOp/auth/FAILED';

const initialState = {
    loading: true,
    success: false,
    authToken: null,
    test: null
}

export default function authReducer(state = initialState, action = '') {
    switch (action.type)
    {
        case 'AUTH_PENDING' :
          console.log('AUTH LOADING')
            return {
                ...state,
                loading: true,
                success: false
            };
        case 'AUTH_FULFILLED' :
            console.log('AUTH LOADED');
            console.log(action.payload.data['access_token']);
            return {
                ...state,
                loading: false,
                success: true,
                authToken: action.payload.data['access_token']
            };
        case 'AUTH_REJECTED' :
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
export function authorise () {
  //return axios.get('https://mog-api.herokuapp.com/search/');
  console.log('AUTHORISE')
  return (dispatch, getState) => {
    return dispatch({
      types: ['AUTH_PENDING', 'AUTH_FULFILLED','AUTH_REJECTED'],
      payload: {
        request: {
          method: 'post',
          url: 'http://mbfoa.dev2.glassesdirecttesting.co.uk/api/v1/auth/token/',
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

export function isAuthorised () {
  return (dispatch, getState) => {
    if (getState().authReducer.test) {
      console.log('AUTHORISED TESTING HEREE')
      return true
    } else {
      dispatch(
        console.log('DISPATCH AUTH CALL'),
        authorise()
      ).then(() => {
        //return true
      })
    }
  }
}
