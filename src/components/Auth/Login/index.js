import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import { AppleIcon, GoogleIcon } from '@/assets/index';
import { setAuthStateAction } from '@/utils/appState/appActions';
import { useStateValue } from '@/utils/appState/StateProvider';
import { refreshTokenSetup } from '@/utils/commonFunctions';
import Button from '@/utils/generalComponents/Button/index';
import TextField from '@/utils/generalComponents/TextField/index';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization/index';
import { storage } from '@/utils/storage';
import Auth from '../index';

export default function Login() {
  const [{ isLoggedIn }, dispatch] = useStateValue();

  const responseGoogle = (data) => {
    const { profileObj } = data || {};
    if (Object.keys(profileObj).length) {
      storage.saveUserData(profileObj);
      dispatch(setAuthStateAction(true));
      refreshTokenSetup(data);
    }
  };

  const errorGoogleAuth = () => {
    return false;
  };

  const {
    auth: {
      login: {
        heading,
        subHeading,
        provider: { google, apple },
        forgotPassword,
        signIn,
        message,
        register,
      },
    },
  } = localization;

  const {
    userData: { email, password },
  } = GLOBAL_CONSTANTS;
  return (
    <Auth>
      <div className="auth__form__wrapper">
        <div className="auth__form__heading">
          <h1>{heading}</h1>
          <h3>{subHeading}</h3>
        </div>
        <div className="auth__form__other__wrapper py-4">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => <Button startIcon={<GoogleIcon />} title={google} onClick={renderProps.onClick} />}
            buttonText={google}
            onSuccess={responseGoogle}
            onFailure={errorGoogleAuth}
            cookiePolicy="single_host_origin"
            isSignedIn={isLoggedIn}
          />
          <Button
            startIcon={<AppleIcon />}
            title={apple}
            onClick={() => {
              return null;
            }}
          />
        </div>
        <div className="login__form__wrapper">
          <form>
            <TextField type="email" id="email" name="email" label="Email address" value={email} placeholder="Email address" />
            <TextField type="password" id="password" name="password" label="Password" value={password} placeholder="Password" />
            <p className="forgot__password">{forgotPassword}</p>
            <Button title={signIn} className="login__button" />
          </form>
        </div>
        <div className="auth__footer__wrapper">
          <p>
            {message}
            {' '}
            <Link to="/register">{register}</Link>
          </p>
        </div>
      </div>
    </Auth>
  );
}
