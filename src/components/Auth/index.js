import PropTypes from 'prop-types';
import React from 'react';
import DefaultLayout from '@/utils/generalComponents/DefaultLayout/index';

export default function Auth({ children }) {
  return (
    <DefaultLayout>
      <div className="auth__wrapper">
        <div className="auth__left__side">
          <h1>Dash.</h1>
        </div>
        <div className="auth__right__side">{children}</div>
      </div>
    </DefaultLayout>
  );
}

Auth.propTypes = {
  children: PropTypes.node.isRequired,
};
