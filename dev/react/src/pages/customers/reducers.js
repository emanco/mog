export default function summaryReducer(state = {}, action = '') {
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

        default:
            state = {};
            break;
    }

    return state;
}