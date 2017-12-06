// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//store
import { applyMiddleware, createStore, combineReducers } from 'redux';

//pages
import Summarypage from "./containers/customers/page";
import Searchpage from "./containers/search/page";


//components
import HeaderComponent from './components/Header/Header';
//import BreadcrumbsComponent from './components/Breadcrumbs/Breadcrumbs';

import FooterComponent from './components/Footer/Footer';


//reducers
import summaryReducer from './redux/modules/customers';
import searchReducer from './redux/modules/search';
import userReducer from './redux/modules/searchUser';

// Bootstrap & jQuery
//import $ from 'jquery';
//import { Carousel, Modal,Button, Panel,Image,Row,Col } from 'react-bootstrap';


// styles
import "./scss/base/0_fonts.css";
import "./scss/base/1_vars.css";
import "./scss/base/2_mixins.css";
import "./scss/base/3_typography.css";
import "./scss/base/4_global.css";
import "./scss/base/5_helper.css";
import "./scss/base/bootstrap_overrides.css";
import "./scss/base/components.css";
import "./scss/base/forms.css";
import "./scss/base/general.css";

// Axios Client setup. This could be moved elsewhere, but will work for now
const client = axios.create({ //all axios can be used, shown in axios documentation
  responseType: 'json'
});


let store = createStore(combineReducers({ summaryReducer, searchReducer, userReducer }), applyMiddleware(promiseMiddleware(), thunk, logger, axiosMiddleware(client)));


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>

                <HeaderComponent />

                {/*<BreadcrumbsComponent />*/}

                <Switch>

                    <Route exact path="/" component={Summarypage} />

                    {/*Customers*/}
                    <Route exact path="/customers" component={Summarypage} />
                    <Route exact path="/customers/:customerid" component={Summarypage} />

                    {/*Search*/}
                    <Route exact path="/search" component={Searchpage} />
                    <Route exact path="/search/:searchid" component={Searchpage} />

                </Switch>

                <FooterComponent />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);

export default store;

