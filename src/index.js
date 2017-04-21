import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './App';
import {rootReducer} from './reducers';
import './index.css';


const store = createStore(rootReducer);
//const history = syncHistoryWithStore(browserHistory, store);
console.log(`Indexx ${history}`);
const Root = ({store}) => (
  <Provider store={store}>
    <App/>
  </Provider>
);

render(
  <Root store={store}/>,
  document.getElementById('root')
);

