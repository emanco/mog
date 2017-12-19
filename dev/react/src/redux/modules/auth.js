// Actions
const LOADING = 'myOp/auth/LOADING';
const LOADED = 'myOp/auth/LOADED';
const FAILED = 'myOp/auth/FAILED';

const initialState = {
    loading: true,
    success: false,
    payload: {}
}

export default function authReducer(state = initialState, action = '') {
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
        default:
            return state;
    }
}

// get Search results with this action, separated by the combined above
export function authorise () {
    //return axios.get('https://mog-api.herokuapp.com/search/');
    console.log('getSearch Action Called')
    return (dispatch, getState) => {
      dispatch({
        types: [LOADING, LOADED, FAILED],
        payload: {
          request: {
            url: 'https://mog-api.herokuapp.com/search/',
            grant_type: 'password',
            username: 'plugandplay',
            password: 'november55',
            client_id: '1d1iLrbz7pmuObdMZ4mwcoAB4GuWHPorvfmpQ7Pq',
            client_secret: '714dE2J2opmlevocDfz4XjIWzpih0uoWHYM8TNSYV7LYILZczbrvQcjRSSMvp0GtZ6BJRJQCDip44lqFuBZr0U4zk6vOrM1iJeOL1ohSxNDuKQHdKHMifFCMaT7E2xH0'
          }
        }
      })
  }
};
