import React from 'react';
import PropTypes from 'prop-types';

export default function AnchorLink({ label }) {
  return <div className="anchor__link">{label}</div>;
}

AnchorLink.propTypes = {
  label: PropTypes.string.isRequired,
};
