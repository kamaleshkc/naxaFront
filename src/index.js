import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker'
import {createStore,applyMiddleware} from "redux"
import { combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// use applyMiddleware to add the thunk middleware to the store
import { projectReducer  } from './reducers/projectReducer';
const rootReducer=combineReducers({
  projectAll:projectReducer
})
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

// sagaMiddleware.run(mySaga)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
