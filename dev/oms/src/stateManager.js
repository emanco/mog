import { createStore } from 'redux';

let store = createStore(commentListReducer);

function commentListReducer(state = [], action) {
    let comments = [
        {
            key:0,
            name:"John Goldstein",
            comment:"Hello"
        },
        {
            key:1,
            name:"Adolf",
            comment:"Goodbye"
        }
    ];

    switch (action.type) {
        case 'GET_COMMENTS':
            return comments;
        case 'DELETE_COMMENT':
            state.splice(action.id, 1);
            return state;
        default:
            return state
    }
}

export { store };