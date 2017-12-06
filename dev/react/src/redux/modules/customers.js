import axios from 'axios';

export default function summaryReducer(state = {}, action = '') {
    switch (action.type)
    {
         case 'FETCH_DATA_PENDING' :
            return {
                ...state,
                loading: true,
                success: false,
                payload: {}
            };
            break;
        case 'FETCH_DATA_FULFILLED' :
            //console.log(action.payload);
            return {
                ...state,
                loading: false,
                success: true,
                payload: action.payload
            };
            break;
        case 'FETCH_DATA_REJECTED' :
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

    return state;
}

const loader = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.2/',
    headers: {'Authorization': 'Bearer omsfire'}
});

const getCustomer = (id) => {
    return loader.get('customers/'+id+'/customer-summary/');
};

const getOrders = (id) => {
    //return loader.get('customers/'+id+'/customer-summary/', );
    // user heroku for the time being until swagger is okay to go
    return axios.get('https://mog-api.herokuapp.com/orders/');
};

const getPrescriptions = (id) => {
    return axios.get('https://mog-api.herokuapp.com/prescriptions/')
}

const getData = (id) => {
  return {
    type: 'FETCH_DATA',
    payload: axios.all([getCustomer(id), getOrders(id), getPrescriptions(id)])
  }
};



export { getData, getCustomer, getOrders };