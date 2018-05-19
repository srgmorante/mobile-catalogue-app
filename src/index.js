import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import phonesReducer from './app/store/reducers/phonesReducer'

import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';

const store = createStore(phonesReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();