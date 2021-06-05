import React from 'react';

import './Bar.css';

const Bar = (props) => {
  const { data, max } = props;
  let barFillHeight = '0%';

  if (max > 0) {
    barFillHeight = Math.round((data.value / max) * 100) + '%';
  }

  return (
    <li className="chart-bar">
      <div className="chart-bar__inner">
        <span className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{data.label}</div>
    </li>
  );
};

export default Bar;
