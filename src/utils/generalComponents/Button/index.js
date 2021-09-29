import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ title, type, onClick, isDisbaled, className, startIcon, endIcon }) {
  return (
    <button type={type ? 'submit' : 'button'} onClick={onClick} disabled={isDisbaled} className={`default__button ${className}`}>
      {startIcon ? <span className="start__icon">{startIcon}</span> : null}
      {title}
      {endIcon ? <span className="end__icon">{endIcon}</span> : null}
    </button>
  );
}

Button.defaultProps = {
  isDisbaled: false,
  className: '',
  type: '',
  endIcon: null,
  startIcon: null,
};
Button.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]).isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isDisbaled: PropTypes.bool,
  className: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};
