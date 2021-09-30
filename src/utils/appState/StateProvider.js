import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

// DATA LAYER
export const StateContext = createContext();

// PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

StateProvider.propTypes = {
  reducer: PropTypes.func.isRequired,
  initialState: PropTypes.oneOfType([PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
};

// Access the stateValue

export const useStateValue = () => useContext(StateContext);
