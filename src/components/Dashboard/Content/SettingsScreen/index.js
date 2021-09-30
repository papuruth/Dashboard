import React from 'react';
import { storage } from '@/utils/storage';
import RenderUserImageIcon from '@/utils/generalComponents/RenderUserImageIcon/RenderUserImageIcon';
import Button from '@/utils/generalComponents/Button';
import TextField from '@/utils/generalComponents/TextField';
import localization from '@/utils/localization';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import { CalendarIcon, EyeCrossIcon, EyeIcon, SwitchIcon } from '@/assets';

export default function SettingsScreen() {
  const {
    auth: {
      labels: { firstName, lastName, dob, phoneNumber, address, email, currentPassword, newPassword },
    },
    dashboard: {
      settings: { profile, account, security, tFA, danger, deleteAccount, save, change },
    },
  } = localization;
  const { userData } = GLOBAL_CONSTANTS;
  const googleData = JSON.parse(storage.getUserData());
  return (
    <div className="user__settings__wrapper">
      <div className="user__profile__section">
        <div className="user__profile__card">
          <div className="profile__card__heading">
            <h1>{profile}</h1>
          </div>
          <div className="profile__card__content">
            <div className="profile__card__image">
              <RenderUserImageIcon src={`${process.env.REACT_APP_WORKER_URL}${googleData?.imageUrl}`} />
              <Button title={change} />
            </div>
            <div className="profile__card__edit__form">
              <form>
                <div className="auth__form__group">
                  <TextField label={firstName} value={googleData?.givenName || userData.firstName} readOnly />
                  <TextField label={lastName} value={googleData?.familyName || userData.lastName} readOnly />
                </div>
                <TextField label={dob} value={userData.dob} readOnly />
                <TextField label={phoneNumber} value={userData.phone} endIcon={<CalendarIcon />} readOnly />
                <TextField label={address} value={userData.address} readOnly />
                <Button title={save} className="signup__button" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="user__account__section">
        <div className="user__account__setting__card">
          <div className="profile__card__heading">
            <h1>{account}</h1>
          </div>
          <div className="settings__card__content">
            <form>
              <TextField label={email} value={googleData?.email || userData.email} readOnly />
              <TextField type="password" label={currentPassword} value={userData.password} readOnly endIcon={<EyeIcon />} />
              <TextField label={newPassword} value={userData.password} readOnly endIcon={<EyeCrossIcon />} />
              <Button title={save} className="signup__button" />
            </form>
          </div>
        </div>
        <div className="user__account__security__card">
          <div className="profile__card__heading">
            <h1>{security}</h1>
          </div>
          <div className="security__card__content">
            <p>{tFA}</p>
            <SwitchIcon />
          </div>
        </div>
        <div className="user__account__danger__card">
          <div className="danger__card__heading">
            <h1>{danger}</h1>
          </div>
          <div className="danger__card__content">
            <Button title={deleteAccount} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}
