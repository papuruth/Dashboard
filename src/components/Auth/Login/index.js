import React, { useState } from 'react';
import Button from '@/utils/generalComponents/Button/index';
import localization from '@/utils/localization/index';
import { AppleIcon, GoogleIcon } from '@/assets/index';
import TextField from '@/utils/generalComponents/TextField/index';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const getTypeName = (type) => {
    if (type === 'email') {
      return 'Email';
    }
    if (type === 'password') {
      return 'Password';
    }
    return '';
  };
  const geValidationMessage = (formValidationErrors, fieldIsValid, type, value) => {
    if (!fieldIsValid && !value) {
      formValidationErrors[type] = `${getTypeName(type)} is required`;
    } else if (!fieldIsValid) {
      formValidationErrors[type] = `${getTypeName(type)} is not valid`;
    } else {
      formValidationErrors[type] = '';
    }
    return formValidationErrors;
  };

  const validateField = (type, value) => {
    const {
      REGEX: { EMAIL, PASSWORD },
    } = GLOBAL_CONSTANTS;
    const formValidationErrors = formErrors;
    let fieldIsValid = true;
    if (type === 'email') {
      fieldIsValid = !!value && EMAIL.test(value);
      Object.assign(formValidationErrors, { ...geValidationMessage(formValidationErrors, fieldIsValid, type, value) });
    } else if (type === 'password') {
      fieldIsValid = !!value && PASSWORD.test(value);
      Object.assign(formValidationErrors, { ...geValidationMessage(formValidationErrors, fieldIsValid, type, value) });
    }

    const formIsValid = Object.values(formValidationErrors).every((item) => !item);
    setFormErrors(formValidationErrors);
    setIsFormValid(formIsValid);
  };

  const handleUserInput = ({ target: { name, value } }) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    validateField(name, value);
  };
  const {
    auth: {
      login: {
        heading,
        subHeading,
        provider: { google, apple },
        forgotPassword,
        signIn,
      },
    },
  } = localization;

  return (
    <div className="login__wrapper">
      <div className="login__heading">
        <h1>{heading}</h1>
        <h3>{subHeading}</h3>
      </div>
      <div className="login__other__wrapper py-4">
        <Button startIcon={<GoogleIcon />} title={google} />
        <Button startIcon={<AppleIcon />} title={apple} />
      </div>
      <div className="login__form__wrapper">
        <form>
          <TextField
            id="email"
            name="email"
            label="Email address"
            value={formData.email}
            onChange={handleUserInput}
            onBlur={handleUserInput}
            placeholder="Email address"
            isRequired
            hasError={formErrors.email}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleUserInput}
            onBlur={handleUserInput}
            placeholder="Password"
            isRequired
            hasError={formErrors.password}
          />
          <p>{forgotPassword}</p>
          <Button type="submit" title={signIn} isDisbaled={!isFormValid} className="login__button" />
        </form>
      </div>
      <div className="login__footer__wrapper" />
    </div>
  );
}
