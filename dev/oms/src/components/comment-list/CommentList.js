import React, { Component } from 'react';
import './commentlist.css';
//import { createStore } from 'redux';
import { store } from '../../stateManager';
import Comment from '../comment/Comment'

class CommentList extends Component {
    constructor(){
        super();

        store.dispatch({ type: 'GET_COMMENTS' });

        this.updateComments();

        //store.subscribe(this.updateComments);

        console.log(this.comments);
    }

    updateComments(){
        this.comments = store.getState();
    }

    render() {
        return (
            <div>
                {this.comments.map((comment) => {
                return (
                         <Comment
                             name={comment.name}
                             comment={comment.comment}
                             id={comment.key}
                             key={comment.key}
                         />
                     )
                 })}
            </div>
        );
    }
}

export default CommentList;