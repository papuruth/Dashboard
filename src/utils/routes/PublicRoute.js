/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useStateValue } from '../appState/StateProvider';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const [{ isLoggedIn }] = useStateValue();
  return <Route {...rest} render={(props) => (restricted && isLoggedIn ? <Redirect to="/" /> : <Component {...props} />)} />;
};

PublicRoute.propTypes = {
  restricted: PropTypes.bool.isRequired,
  component: (props) => {
    const { component } = props;
    if (component && !isValidElementType(component)) {
      return new Error("Invalid prop 'component' supplied to 'publicRoute': the prop is not a valid React component");
    }
    return null;
  },
};

PublicRoute.defaultProps = {
  component: null,
};

export default PublicRoute;
