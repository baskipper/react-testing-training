import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {stack as rootReducer} from "./reducers";
import App from "./components/App";
import Stack from "./components/Stack"
import {setStack} from "./actions";

const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(() => {

});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/stack" component={Stack}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
