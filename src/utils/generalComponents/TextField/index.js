import React from 'react';
import PropTypes from 'prop-types';

export default function TextField({ id, name, value, label, onChange, isRequired, hasError, onBlur, placeholder, className }) {
  return (
    <label htmlFor={id} className={`default__textfield ${className}`}>
      {label}
      <input id={id} type="text" name={name} value={value} onChange={onChange} required={isRequired} onBlur={onBlur} placeholder={placeholder} />
      {hasError ? <span className="error">{hasError}</span> : null}
    </label>
  );
}

TextField.defaultProps = {
  name: '',
  id: '',
  label: '',
  isRequired: false,
  hasError: '',
  onBlur: () => null,
  placeholder: '',
  className: '',
};

TextField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  hasError: PropTypes.string,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
