import React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '@/utils/generalComponents/DefaultLayout/index';
import Signup from './Signup/index';
import Login from './Login/index';

export default function Auth({ location }) {
  const { pathname } = location || {};
  return (
    <DefaultLayout>
      <div className="auth__wrapper">
        <div className="auth__left__side">
          <h1>Dash.</h1>
        </div>
        <div className="auth__right__side">{pathname === '/login' ? <Login /> : <Signup />}</div>
      </div>
    </DefaultLayout>
  );
}

Auth.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
