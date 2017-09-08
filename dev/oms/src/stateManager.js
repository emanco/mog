import { createStore } from 'redux';

let store = createStore(commentListReducer);

function commentListReducer(state = [], action) {
    switch (action.type) {
        case 'GET_COMMENTS':
            return [
                {
                    key:1,
                    name:"John Goldstein",
                    comment:"Hello"
                },
                {
                    key:2,
                    name:"Adolf",
                    comment:"Goodbye"
                }
            ];
        default:
            return state
    }
}

export { store };