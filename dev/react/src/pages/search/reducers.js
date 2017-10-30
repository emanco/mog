export default function searchReducer(state = {}, action = '') {
    switch (action.type)
    {
         case 'FETCH_DATA_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'FETCH_DATA_FULFILLED' :
            //console.log(action.payload);
            state = {
                loading: false,
                success: true,
                payload: action.payload
            };
            break;
        case 'FETCH_DATA_REJECTED' :
            state = {
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
            break;

        case 'GET_USER_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'GET_USER_FULFILLED' :
            //console.log(action.payload);
            state = {
                loading: false,
                success: true,
                payload: action.payload
            };
            break;
        case 'GET_USER_REJECTED' :
            state = {
                loading: false,
                success: false,
                payload: {
                    message: action.payload.message
                }
            };
            break;


        case 'SEARCH_SUBMIT' :
            state = {
                query: action.payload
            };
            break;
        case 'SEARCH_CHANGE' :
            state = {
                query: action.payload
            };
            break;
        default:
            state = {};
            break;
    }

    return state;
}