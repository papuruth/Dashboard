import React from 'react';
import PropTypes from 'prop-types';
import RenderContentHeader from './RenderContentHeader';
import RenderScreen from './RenderScreen';

export default function RenderContent({ title, screen }) {
  return (
    <div className="content__wrapper">
      <RenderContentHeader title={title} />
      <RenderScreen>{screen}</RenderScreen>
    </div>
  );
}

RenderContent.propTypes = {
  title: PropTypes.string.isRequired,
  screen: PropTypes.node.isRequired,
};
