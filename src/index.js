import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const defaultCreatures = [
  {
    name: 'Dragon',
    origin: 'China',
  },
  {
    name: 'Kitsune',
    origin: 'Japan',
  },
];
// TODO - update reducer to manage creature data
function creatureListReducer(state = defaultCreatures, action) {
  if (action.type === 'ADD_TO_CREATURE_LIST') {
    return [
      ...state,
      action.payload
    ];
  } else if (action.type === 'DELETE_CREATURE_FROM_LIST') {
    return state.filter((item, index) => {
      return action.payload !== index;
    });
  }

  return state;
}

const storeInstance = createStore(
  combineReducers({
    // add any reducers here
    creatureListReducer,
  }),
  // TODO - add middleware for logger
  applyMiddleware(logger)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
