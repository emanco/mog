import React, { Component } from 'react';
import './commentlist.css';
//import { createStore } from 'redux';
import { store } from '../../stateManager';

class CommentList extends Component {
    constructor(){
        super();

        store.dispatch({ type: 'GET_COMMENTS' });

        this.comments = store.getState();

        console.log(this.comments);
    }

    render() {
        return (
            <ul>
                {this.comments.map(comment => <li key={comment.key}>
                    <h2>{comment.name}</h2>
                    <div>{comment.comment}</div>
                    </li>)}
            </ul>
        )
    }
}

export default CommentList;