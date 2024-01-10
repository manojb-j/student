import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { StudentList } from './data';

const PFChart = () => {
  const [passFailData, setPassFailData] = useState({ pass: 0, fail: 0 });

  useEffect(() => {
    // Calculate pass and fail count
    const passFailCount = StudentList.reduce(
      (result, student) => {
        if (student.score >= 0.3 * 1600) {
          result.pass += 1;
        } else {
          result.fail += 1;
        }
        return result;
      },
      { pass: 0, fail: 0 }
    );

    setPassFailData(passFailCount);
  }, []);

  const chartOptions = {
    labels: ['Pass', 'Fail'],
  };

  const chartSeries = [passFailData.pass, passFailData.fail];

  return (
    <div>
      {/* Pass/Fail Pie Chart */}
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PFChart;
