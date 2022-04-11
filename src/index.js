import React from 'react';
import App from './App';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [
  logger
];

const storeOpt = process.env.MODE === 'prod'
  ? composeWithDevTools(
    applyMiddleware(...middlewares)
  )
  : applyMiddleware(...middlewares);

const store = createStore(
  rootReducer, 
  storeOpt
);

// before 18
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// after 18
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);