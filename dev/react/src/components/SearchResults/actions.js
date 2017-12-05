import axios from 'axios';

// get Search results with this action, separated by the combined above
const getSearch = (id) => {
    //return axios.get('https://mog-api.herokuapp.com/search/');

    return {
        type: 'SEARCH_RESULTS',
        payload: axios.get('https://mog-api.herokuapp.com/search/')
    }
};



const onSubmit = (value) => {
    return {
        type: 'SEARCH_SUBMIT',
        query: value
    };
};

const onChange = (value) => {
    return {
        type: 'SEARCH_CHANGE',
        query: value
    };
};



export { getSearch, onSubmit, onChange };