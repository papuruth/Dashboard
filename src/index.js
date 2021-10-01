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

serviceWorkerRegistration.register();
