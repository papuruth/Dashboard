import React from 'react';
import { Link } from 'react-router-dom';
import { AppleIcon, EyeCrossIcon, EyeIcon, GoogleIcon } from '@/assets/index';
import AnchorLink from '@/utils/generalComponents/Anchor/index';
import Button from '@/utils/generalComponents/Button/index';
import Checkbox from '@/utils/generalComponents/CheckBox/index';
import TextField from '@/utils/generalComponents/TextField/index';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization/index';
import Auth from '../index';

export default function Signup() {
  const {
    auth: {
      signup: {
        heading,
        subHeading,
        provider: { google, apple },
        terms,
        conditions,
        signUp,
        message,
        signin,
      },
    },
  } = localization;
  const {
    userData: { email, password, firstName, lastName },
  } = GLOBAL_CONSTANTS;
  return (
    <Auth>
      <div className="auth__form__wrapper">
        <div className="auth__form__heading">
          <h1>{heading}</h1>
          <h3>{subHeading}</h3>
        </div>
        <div className="auth__form__other__wrapper py-4">
          <Button startIcon={<GoogleIcon />} title={google} />
          <Button startIcon={<AppleIcon />} title={apple} />
        </div>
        <div className="signup__form__wrapper">
          <form>
            <div className="auth__form__group">
              <TextField id="firstname" name="firstname" label="First Name" value={firstName} placeholder="First Name" readOnly />
              <TextField id="lastname" name="lastname" label="Last Name" value={lastName} placeholder="Last Name" readOnly />
            </div>
            <TextField type="email" id="email" name="email" label="Email address" value={email} placeholder="Email address" readOnly />
            <TextField type="password" id="password" name="password" label="Password" value={password} placeholder="Password" endIcon={<EyeIcon />} readOnly />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              value={password}
              placeholder="Confirm Password"
              endIcon={<EyeCrossIcon />}
              readOnly
            />
            <div className="signup__terms">
              <Checkbox
                name="terms"
                checked
                readOnly
              />
              {terms}
              <AnchorLink label={conditions} />
            </div>
            <Button title={signUp} className="signup__button" />
          </form>
        </div>
        <div className="auth__footer__wrapper">
          <p>
            {message}
            {' '}
            <Link to="/login">{signin}</Link>
          </p>
        </div>
      </div>
    </Auth>
  );
}
