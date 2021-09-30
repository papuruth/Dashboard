import 'jquery/src/jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { StateProvider } from './utils/appState/StateProvider';
import appReducer, { initialState } from './utils/appState/appReducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={appReducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
