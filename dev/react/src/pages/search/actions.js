import axios from 'axios';


const loader = axios.create({
    baseURL: 'https://virtserver.swaggerhub.com/MyOptiqueGroup/mbf-order-api/1.0.2/',
    headers: {'Authorization': 'Bearer omsfire'}
});

const getCustomer = (id) => {
    //return loader.get('customers/'+id+'/customer-summary/');
    if (id) {
        return axios.get('https://mog-api.herokuapp.com/customer-summary/'+id);
    } else {
        return axios.get('https://mog-api.herokuapp.com/customer-summary/1');
    }

};

const getOrders = (id) => {
    //return loader.get('customers/'+id+'/customer-summary/', );
    // user heroku for the time being until swagger is okay to go
    return axios.get('https://mog-api.herokuapp.com/orders/');
};

const getSearch = (id) => {
    return axios.get('https://mog-api.herokuapp.com/search/');
}

const getPrescriptions = (id) => {
    return axios.get('https://mog-api.herokuapp.com/prescriptions/')
}

const getData = (id) => {
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getCustomer(), getOrders(id), getPrescriptions(id), getSearch(id)])
    }
};


const getUser = (id, userid) => {
    console.log(id+'/'+userid);
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getCustomer(userid), getOrders(id), getPrescriptions(id), getSearch(id)])
    }
};


const submit = (value) => {
    return {
        type: 'SEARCH_SUBMIT',
        query: value
    };
};

const change = (value) => {
    return {
        type: 'SEARCH_CHANGE',
        query: value
    };
};



export { getData, getCustomer, getOrders, getUser, submit, change };