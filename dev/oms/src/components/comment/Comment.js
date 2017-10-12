import React, { Component } from 'react';
import './comment.css';
//import { createStore } from 'redux';
import { store } from '../../stateManager';

class Comment extends Component {
    render(){
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>{this.props.comment}</p>
                <button onClick={this._handleDelete.bind(this)}>x</button>
            </div>
        );
    }

    _handleDelete(){
        console.log(this.props);
        store.dispatch({ type: 'DELETE_COMMENT', id: this.props.id});
    }
}

export default Comment;