import React from 'react';
import PropTypes from 'prop-types';
import { getUserProfileImage } from '@/utils/commonFunctions/index';

export default function RenderUserImageIcon({ src, alt }) {
  return <img src={getUserProfileImage(src)} alt={alt} className="user__profile__image" />;
}

RenderUserImageIcon.defaultProps = {
  alt: 'Papu Kumar',
  src: '',
};

RenderUserImageIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
