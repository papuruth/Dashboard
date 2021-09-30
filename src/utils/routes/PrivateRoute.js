import PropTypes from 'prop-types';
import React from 'react';
import { isValidElementType } from 'react-is';
import { Redirect, Route } from 'react-router-dom';
import { useStateValue } from '../appState/StateProvider';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const [{ isLoggedIn }] = useStateValue();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} key={location?.pathname} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )}
    />
  );
};

const { oneOfType } = PropTypes;

PrivateRoute.propTypes = {
  component: (props) => {
    const { component } = props;
    if (component && !isValidElementType(component)) {
      return new Error("Invalid prop 'component' supplied to 'privateRoute': the prop is not a valid React component");
    }
    return null;
  },
  location: oneOfType([PropTypes.object]),
};

PrivateRoute.defaultProps = {
  component: null,
  location: {},
};

export default PrivateRoute;
