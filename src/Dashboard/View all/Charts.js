import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { StudentList } from './data';

const Charts = () => {
    
    const categories = StudentList.map(student => student.name);
    const scoresData = StudentList.map(student => student.score);
    const cData = StudentList.map(student => student.country);
    const RData = StudentList.map(student => student.result);

    const chartOptions = {
        chart: {
            type: 'bar',
        },
        xaxis: {
            categories: categories,
            title: {
                text: 'Students'
            }
        },
        yaxis: {
            title: {
                text: 'Scores'
            }
        },
        stroke: {
            curve: 'smooth',
        },
        // fill: {
        //     colors: ['#F44336', '#E91E63', '#9C27B0']
        // }
    };

    const chartSeries = [
        {
            name: 'Score',
            data: scoresData,
        },
        {
            name: 'Score',
            data: cData,
        },
    ];

    return (
        <div className='container' style={{marginTop:"1%"}}>
            <div className='row'>

                <div className="col-md-12">
                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="bar"
                        height={370}
                        width="100%"

                    />
                </div>
                {/* <div className="col-md-6">
                    <ReactApexChart
                        options={chartOptions}
                        series={chartSeries}
                        type="line"
                        height={370}
                        width="100%"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Charts;
