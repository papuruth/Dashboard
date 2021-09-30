import React from 'react';
import { Pie } from 'react-chartjs-2';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';
import localization from '@/utils/localization/index';

export default function RenderContentFooter() {
  const {
    pieChart: { data, options },
    schedulesData,
  } = GLOBAL_CONSTANTS;
  const {
    dashboard: { products, activityDate, schedules, seeAll },
  } = localization;
  return (
    <div className="content__footer__wrapper">
      <div>
        <div className="products__labels">
          <h1>{products}</h1>
          <p>{activityDate}</p>
        </div>
        <div className="products__pie__chart">
          <Pie id="productsChart" data={data} height={100} options={options} />
        </div>
      </div>
      <div>
        <div className="schedules__labels">
          <h1>{schedules}</h1>
          <p>{seeAll}</p>
        </div>
        <div className="schedules__content">
          {schedulesData.map((ele) => (
            <div key={ele.id} className={`schedule__${ele.id}`}>
              <h3>{ele.title}</h3>
              <p>{ele.time}</p>
              <p>{ele.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
