import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

export default function RenderModal({ children, open, onClose, title }) {
  return (
    <div className="modal fade show" style={open ? { display: 'block', paddingRight: '15px' } : {}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <Button type="button" className="close" onClick={onClose} aria-label="Close" title={<span aria-hidden="true">&times;</span>} />
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

RenderModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
