import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import  rootReducer from "./reducers";
import Category from "./components/Category";
import './index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/category' component={Category}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
