import React, { useState } from 'react';
import PropTypes from 'prop-types';
import localization from '@/utils/localization/index';
import RenderDrawerItem from './RenderDrawerItem';

export default function RenderDrawer({ handleScreenType }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    dashboard: { dash },
  } = localization;

  const handleSelected = (data, index) => {
    setActiveIndex(index);
    handleScreenType(data?.id);
  };

  return (
    <div className="drawer__wrapper">
      <div className="drawer__list__wrapper">
        <h1>{dash}</h1>
        <div className="drawer__mobile">
          <RenderDrawerItem handleSelected={handleSelected} selectedIndex={activeIndex} />
        </div>
        <div className="drawer__desktop">
          <RenderDrawerItem handleSelected={handleSelected} selectedIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}

RenderDrawer.propTypes = {
  handleScreenType: PropTypes.func.isRequired,
};
