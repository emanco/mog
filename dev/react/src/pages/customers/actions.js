import axios from 'axios';


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