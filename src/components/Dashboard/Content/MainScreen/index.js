import React from 'react';
import RenderActivityChart from './RenderActivityChart';
import RenderContentFooter from './RenderContentFooter';
import RenderContentHighlightCard from './RenderContentHighlightCard';

export default function MainScreen() {
  return (
    <>
      <RenderContentHighlightCard />
      <RenderActivityChart />
      <RenderContentFooter />
    </>
  );
}
