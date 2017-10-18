import React, { Component } from 'react';
import './../../scss/components/header.css';

class HeaderView extends Component {
    render() {

        return (
            <div>
                <header className="nav-container nav-height">
                    <i className="ion-ios-search" />

                    <input type="text" className="form-control search" placeholder="" />

                        <div className="burger-container">
                            <button className="burger" id="nav-burger" type="button">
                                <span className="sr-only">Toggle navigation</span>
                                <i />
                            </button>
                        </div>
                </header>
            </div>
        );
    }
}

export default HeaderView;