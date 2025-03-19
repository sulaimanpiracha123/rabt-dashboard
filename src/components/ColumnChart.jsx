import React from 'react';
import Chart from 'react-apexcharts';

const ColumnChart = () => {
  // Chart options
  const options = {
    chart: {
      id: 'basic-column',
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    plotOptions: {
      bar: {
        columnWidth: '45%', // Adjust the width of the columns
        endingShape: 'rounded', // Rounded edges for columns
      },
    },
    dataLabels: {
      enabled: false, // Disable data labels on columns
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'], // Transparent stroke for columns
    },
    fill: {
      opacity: 1, // Adjust the opacity of the columns
    },
    colors: ['#3B82F6'], // Custom color for columns
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands'; // Custom tooltip format
        },
      },
    },
  };

  // Chart data
  const series = [
    {
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 80, 90, 100],
    },
  ];

  return (
    <div className="column-chart">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={350}
        width="850px"
      />
    </div>
  );
};

export default ColumnChart;