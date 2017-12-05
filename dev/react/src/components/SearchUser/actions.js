import axios from 'axios';


/*const loader = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.2/',
    headers: {'Authorization': 'Bearer omsfire'}
});*/


// declare all API calls for left hand side
const getCustomer = (id=1) => {
    //return loader.get('customers/'+id+'/customer-summary/');
    return axios.get('https://mog-api.herokuapp.com/customer-summary/'+id);
};

const getOrders = (id) => {
    //return loader.get('customers/'+id+'/customer-summary/', );
    // user heroku for the time being until swagger is okay to go
    return axios.get('https://mog-api.herokuapp.com/orders/');
};

const getPrescriptions = (id) => {
    return axios.get('https://mog-api.herokuapp.com/prescriptions/')
};

// combine them here into a single action
const getUserData = (id) => {
    return {
        type: 'USER_RESULTS',
        payload: axios.all([getCustomer(id), getOrders(id), getPrescriptions(id)])
    }
};



export { getUserData, getCustomer, getOrders, getPrescriptions };