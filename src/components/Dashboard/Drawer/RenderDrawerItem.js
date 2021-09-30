import React from 'react';
import PropTypes from 'prop-types';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization/index';

export default function RenderDrawerItem({ handleSelected, selectedIndex }) {
  const { drawerItems } = GLOBAL_CONSTANTS;
  const {
    dashboard: {
      drawer: { help, contact },
    },
  } = localization;
  return (
    <>
      <ul className="drawer__list__content">
        {drawerItems.map((item, index) => (
          <div
            key={item.id}
            className="drawer__list__item"
            role="button"
            onClick={() => handleSelected(item, index)}
            onKeyPress={() => handleSelected(item, index)}
            tabIndex={0}
          >
            <div className="drawer__list__item__icon">{item.icon}</div>
            <div className={`drawer__list__item__title ${index === selectedIndex ? 'active' : ''}`}>{item.title}</div>
          </div>
        ))}
      </ul>
      <div className="drawer__footer__content">
        <p>{help}</p>
        <p>{contact}</p>
      </div>
    </>
  );
}

RenderDrawerItem.propTypes = {
  handleSelected: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
};
