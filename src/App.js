import React from 'react';
import { Route, Router, Switch } from 'react-router';
import ErrorBoundary from './utils/generalComponents/ErrorBoundary/index';
import history from './utils/routes/history';
import routes from './utils/routes/index';

function App() {
  return (
    <div>
      <Router history={history}>
        <ErrorBoundary>
          <Switch>
            {routes.map((item) => (
              <Route {...item} />
            ))}
          </Switch>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
