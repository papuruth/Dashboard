import React from 'react';
import PropTypes from 'prop-types';

export default function TextField({
  type,
  id,
  name,
  value,
  label,
  onChange,
  isRequired,
  hasError,
  onBlur,
  placeholder,
  className,
  readOnly,
  endIcon,
}) {
  return (
    <label htmlFor={id} className={`default__textfield ${className}`}>
      {label}
      <div className="input__field">
        <input
          id={id || name || label}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={isRequired}
          onBlur={onBlur}
          placeholder={placeholder}
          readOnly={readOnly}
        />
        {endIcon ? <span className="text__field__icon">{endIcon}</span> : null}
      </div>
      {hasError ? <span className="error">{hasError}</span> : null}
    </label>
  );
}

TextField.defaultProps = {
  type: 'text',
  name: '',
  id: '',
  label: '',
  isRequired: false,
  hasError: '',
  onBlur: () => null,
  placeholder: '',
  className: '',
  onChange: () => null,
  readOnly: false,
  endIcon: null,
};

TextField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isRequired: PropTypes.bool,
  hasError: PropTypes.string,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  readOnly: PropTypes.bool,
  endIcon: PropTypes.node,
  type: PropTypes.string,
};
