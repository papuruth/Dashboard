import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useStateValue } from './utils/appState/StateProvider';
import ErrorBoundary from './utils/generalComponents/ErrorBoundary/index';
import routes from './utils/routes/index';

function App() {
  const [{primaryLoader}] = useStateValue();
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>{routes.map((route) => route)}</Switch>
        </ErrorBoundary>
      </BrowserRouter>
      {primaryLoader && (
        <div id="preloader">
          <div id="loader" />
        </div>
      )}
    </div>
  );
}

export default App;
