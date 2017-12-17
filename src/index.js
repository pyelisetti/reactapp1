import ReactDOM from 'react-dom';
import Welcome from './containers/Welcome.jsx';
import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk';


const store = createStore(
  reducer
  ,applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <Welcome/>
  </Provider>,
  document.getElementById('app')
)
