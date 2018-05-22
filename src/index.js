// Core
import React from 'react';
import ReactDOM from 'react-dom';
// Styles
import './index.css';
// Components
import App from './App';
// Redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
// Reducer
import phonesReducer from './app/store/reducers/phonesReducer'
// Server
import registerServiceWorker from './registerServiceWorker';

// Create the store
const store = createStore(phonesReducer, applyMiddleware(thunk));

// Apply the store through react/redux Provider evolving the App Component witch is the Root component.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
