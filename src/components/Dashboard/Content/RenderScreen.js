import React from 'react';
import PropTypes from 'prop-types';

export default function RenderScreen({ children }) {
  return <>{children}</>;
}

RenderScreen.propTypes = {
  children: PropTypes.node.isRequired,
};
