import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Header from '@/components/Header';
import { toggleDrawerAction } from '@/utils/appState/appActions';
import { useStateValue } from '@/utils/appState/StateProvider';
import useWindowWidth from '@/utils/hooks/useWindowWidth';
import RenderDrawerItem from './RenderDrawerItem';

export default function RenderDrawer({ handleScreenType }) {
  const [{ mountDrawer }, dispatch] = useStateValue();
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowWidth();

  const handleSelected = (data, index) => {
    setActiveIndex(index);
    handleScreenType(data?.id);
  };

  const handleCloseDrawer = (flag) => {
    dispatch(toggleDrawerAction(flag));
  };

  return (
    <div className="main__drawer">
      <nav className="dashboard__navbar">
        <Header />
        <RenderDrawerItem handleSelected={handleSelected} selectedIndex={activeIndex} open={mountDrawer} closeDrawer={handleCloseDrawer} />
        {width >= 1367 ? <RenderDrawerItem handleSelected={handleSelected} selectedIndex={activeIndex} open closeDrawer={handleCloseDrawer} /> : null}
      </nav>
    </div>
  );
}

RenderDrawer.propTypes = {
  handleScreenType: PropTypes.func.isRequired,
};
