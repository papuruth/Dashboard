import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return <section className="mx-auto w-full">{children}</section>;
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
