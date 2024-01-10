import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { StudentList } from './data';

const Pie = () => {
  const [passData, setPassData] = useState([]);

  useEffect(() => {
    const passPercentageData = StudentList.map(student => ({
      name: student.name,
      passPercentage: (student.score / 1600) * 100,
      country: student.country,
    }));

    setPassData(passPercentageData);
  }, []);

  const generateChartData = (key) => {
    return passData.map(item => ({
      x: item.name,
      y: item[key],
    }));
  };

  const chartOptions = {
    chart: {
      id: 'pass-chart',
      animations: {
        enabled: true,
      },
    },
    xaxis: {
      categories: passData.map(item => item.name),
    },
  };

  const passPercentageChartSeries = [
    {
      name: 'Pass Percentage',
      type: 'column',
      data: generateChartData('passPercentage'),
    },
    {
      name: 'Pass Percentage Line',
      type: 'line',
      data: generateChartData('passPercentage'),
    },
  ];

  const countryChartOptions = {
    labels: passData.map(item => item.country),
  };

  const countryChartSeries = passData.map(item => item.passPercentage);

  return (
    <div>
        <ReactApexChart
          options={countryChartOptions}
          series={countryChartSeries}
          type="pie"
          height={350}
        />
      
      <ReactApexChart
        options={chartOptions}
        series={passPercentageChartSeries}
        type="line"
        height={350}
      />

    </div>
  );
};

export default Pie;
