import React from 'react';

import './Chart.css';

import Bar from './Bar/Bar';

const Chart = (props) => {
  const { dataSource } = props;
  const valuesArr = dataSource.map((item) => item.value);
  const maxValue = Math.max(...valuesArr);

  return (
    <ul className="chart">
      {dataSource.map((data, index) => (
        <Bar key={index} data={data} max={maxValue} />
      ))}
    </ul>
  );
};

export default Chart;
