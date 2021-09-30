import React from 'react';
import { GLOBAL_CONSTANTS } from '@/utils/globalConstants';

export default function RenderContentHighlightCard() {
  const { highlightCards } = GLOBAL_CONSTANTS;
  return (
    <div className="highlight__card__wrapper">
      {highlightCards.map((item) => (
        <div className={item.className} key={item.id}>
          <div className="highlight__card__item__content">
            <p>{item.title}</p>
            <h1>
              {item?.id === 'totalRevenue'
                ? item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
                : item.amount.toLocaleString('en-US')}
            </h1>
          </div>
          <div className="highlight__card__item__icon">{item.icon}</div>
        </div>
      ))}
    </div>
  );
}
