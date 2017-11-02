export default function userReducer(state = {}, action = '') {
    switch (action.type)
    {

        case 'USER_RESULTS_PENDING' :
            state = {
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'USER_RESULTS_FULFILLED' :
            //console.log(action.payload);
            state = {
                loading: false,
                success: true,
                payload: action.payload
            };
            break;
        case 'USER_RESULTS_REJECTED' :
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