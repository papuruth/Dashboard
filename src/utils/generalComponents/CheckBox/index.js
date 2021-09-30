import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ name, checked, readOnly, onChange, className }) {
  return <input type="checkbox" name={name} checked={checked} readOnly={readOnly} onChange={onChange} className={className} />;
}

Checkbox.defaultProps = {
  readOnly: false,
  onChange: () => null,
  className: '',
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
