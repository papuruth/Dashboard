import React from 'react';
import Button from '@/utils/generalComponents/Button';
import { useStateValue } from '@/utils/appState/StateProvider';
import { toggleDrawerAction } from '@/utils/appState/appActions';

export default function Header() {
  const [{ mountDrawer }, dispatch] = useStateValue();
  const openDrawer = () => {
    dispatch(toggleDrawerAction(!mountDrawer));
  };
  return (
    <header className="dashboard__header">
      <div className="header__content">
        <Button onClick={openDrawer} title={<i className="fa fa-bars" />} />
      </div>
    </header>
  );
}
