import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization/index';

export default function RenderDrawerItem({ handleSelected, selectedIndex, open, closeDrawer }) {
  const { drawerItems } = GLOBAL_CONSTANTS;
  let drawerRef = null;
  const {
    dashboard: {
      dash,
      drawer: { help, contact },
    },
  } = localization;

  useEffect(() => {
    const handleMouseEvent = (event) => {
      if (event.target && drawerRef && !drawerRef.contains(event.target)) {
        closeDrawer(false);
      }
    };
    window.addEventListener('mousedown', handleMouseEvent);
    return () => {
      window.removeEventListener('mousedown', handleMouseEvent);
    };
  }, [closeDrawer, drawerRef]);

  return (
    <div
      className={`drawer__list__wrapper ${open ? 'toggle__drawer' : ''}`}
      ref={(dRef) => {
        drawerRef = dRef;
      }}
    >
      <div className="drawer__wrapper">
        <div>
          <div className="drawer__content">
            <h1>{dash}</h1>
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
          </div>
        </div>
      </div>
    </div>
  );
}

RenderDrawerItem.propTypes = {
  handleSelected: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
};
