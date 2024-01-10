import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { StudentList } from './data';


const ChartComponent = () => {
    const data = StudentList;
  const chartOptions = {
    chart: {
      id: 'mixed-chart',
      animations: {
        enabled: true,
      },
    },
    xaxis: {
      categories: data.map(student => student.name),
    },
    stroke: {
        curve: 'smooth',
    },
  };

  const chartSeries = [
    {
      name: 'Scores',
      type: 'column',
      data: data.map(student => student.score),
    },
    {
      name: 'Line Series',
      type: 'line',
      data: data.map(student => student.score), // Example line series data
    },
    {
      name: 'Area Series',
      type: 'area',
      data: data.map(student => student.score ), // Example area series data
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartSeries}
      type="line"
      height={350}
    />
  );
};

export default ChartComponent;
