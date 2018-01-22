import axios from 'axios'
import { customersEndpoint } from '../../constants/endpoints'
import buildQueryUrl from '../../helpers/buildQueryUrl'

export default function summaryReducer(state = {}, action = '') {
    switch (action.type)
    {
    case 'FETCH_DATA_PENDING' :
      return {
        ...state,
        loading: true,
        success: false,
        payload: {}
      }
    case 'FETCH_DATA_FULFILLED' :
      //console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        payload: action.payload
      }
    case 'FETCH_DATA_REJECTED' :
      return {
        ...state,
        loading: false,
        success: false,
        payload: {
            message: action.payload.message
        }
      }
    default:
        return state;
    }
}

const loader = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.3/',
    headers: {'Authorization': 'omsfire'}
});

const getCustomer = (id) => {
  return axios({
    method: 'GET',
    url: customersEndpoint + '/' + id,
    headers: {Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')}
  });
};

const getOrders = (id, limitValue = 5) => {
  const params = {
    limit: limitValue
  }

  const queryUrl = buildQueryUrl(customersEndpoint + '/' + id + '/order-summary', params)

  return axios({
    method: 'GET',
    url: queryUrl,
    headers: {Authorization: 'Bearer ' + window.localStorage.getItem('jwtToken')}
  });
};

const getPrescriptions = (id) => {
  return axios.get('https://mog-api.herokuapp.com/prescriptions/')
}

const getData = (id) => {
  return (dispatch, getState) => {
    return dispatch({
      type: 'FETCH_DATA',
      payload: axios.all([getCustomer(id), getOrders(id), getPrescriptions(id)])
    })
  }
};



export { getData, getCustomer, getOrders };