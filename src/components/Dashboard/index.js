import React from 'react';
import { useStateValue } from '@/utils/appState/StateProvider';
import DefaultLayout from '@/utils/generalComponents/DefaultLayout/index';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import RenderContent from './Content/index';
import MainScreen from './Content/MainScreen/index';
import SettingsScreen from './Content/SettingsScreen/index';
import UsersScreen from './Content/UserScreen/index';
import RenderDrawer from './Drawer/index';
import Developemt from '../Developemt/index';

export default function Dashboard() {
  const [{ screenType }, dispatch] = useStateValue();
  const screens = {
    dashboard: <MainScreen />,
    users: <UsersScreen />,
    settings: <SettingsScreen />,
    schedules: <Developemt />,
    transactions: <Developemt />,
  };
  const { screenTitles } = GLOBAL_CONSTANTS;

  const handleScreenType = (type) => {
    dispatch({
      type: 'SET_SCREEN_TYPE',
      payload: type,
    });
  };

  return (
    <DefaultLayout>
      <div className="dashboard__wrapper">
        <RenderDrawer handleScreenType={handleScreenType} />
        <RenderContent screen={screens[screenType]} title={screenTitles[screenType]} key={screenType} />
      </div>
    </DefaultLayout>
  );
}
