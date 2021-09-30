import React from 'react';
import PropTypes from 'prop-types';
import { BellIcon, SearchIcon } from '@/assets/index';
import RenderUserImageIcon from '@/utils/generalComponents/RenderUserImageIcon/RenderUserImageIcon';
import TextField from '@/utils/generalComponents/TextField/index';
import localization from '@/utils/localization/index';
import Button from '@/utils/generalComponents/Button';
import { useStateValue } from '@/utils/appState/StateProvider';
import { storage } from '@/utils/storage';

export default function RenderContentHeader({ title }) {
  const [{ isLoggedIn }, dispatch] = useStateValue();
  const {
    dashboard: { search },
    auth: { logout },
  } = localization;

  const handleLogout = () => {
    dispatch({
      type: 'SET_AUTH_STATE',
      payload: !isLoggedIn,
    });
    storage.clearStorage();
  };

  return (
    <div className="content__header__wrapper">
      <div className="header__heading">
        <h1>{title}</h1>
      </div>
      <div className="header__actions">
        <div>
          <div className="header__search">
            <TextField className="header__search__box" endIcon={<SearchIcon />} value="" readOnly placeholder={search} />
          </div>
          <div className="header__notification">
            <BellIcon />
          </div>
          <div className="header__user__icon dropdown">
            <RenderUserImageIcon />
            {isLoggedIn ? (
              <div className="dropdown-content">
                <Button startIcon={<i className="fa fa-sign-out" aria-hidden="true" />} title={logout} onClick={handleLogout} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

RenderContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
