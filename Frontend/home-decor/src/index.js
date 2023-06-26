import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import allReducer from './Reducers';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(allReducer)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);

