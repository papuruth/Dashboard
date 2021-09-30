import React from 'react';
import { Line } from 'react-chartjs-2';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization/index';

export default function RenderActivityChart() {
  const {
    activityChartData: { data, plugin, options },
  } = GLOBAL_CONSTANTS;
  const {
    dashboard: { activities, activityDate },
  } = localization;
  return (
    <div className="activity__chart__wrapper">
      <div className="activity__chart__label">
        <h1>{activities}</h1>
        <p>{activityDate}</p>
      </div>
      <div className="activity__chart__content">
        <Line
          id="activityChart"
          type="line"
          data={data}
          height={250}
          options={options}
          plugins={[plugin]}
        />
      </div>
    </div>
  );
}
