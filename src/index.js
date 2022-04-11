import React from 'react';
import App from './App';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(logger)
  )
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