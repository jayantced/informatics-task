import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto'; // Import Chart.js

const Chart = (props) => {
  const chartRef = useRef(null); // Reference to the chart instance
  let chartInstance = null; // Define a variable to hold the chart instance


  const renderPieChart = () => {
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      chartInstance = new ChartJS(ctx, {
        type: "pie",
        data: {
          labels: [
            `Flexi Cap Fund 32.19%`,
            "ELSS 26.04%",
            "Small Cap Fund 26.40%",
            "Index Fund 12.03%",
            "Sectoral Fund 26.40%",
            "Large & Mid Cap Fund 12.03%",
          ],
          datasets: [
            {
              label: "Dataset",
              data: [32.19, 26.04, 26.40, 12.03, 26.40, 12.03],
              backgroundColor: [
                "#75D6FF",
                "#FF8E5D",
                "#FFC46A",
                "#FF7BF2",
                "#AA75FF",
                "#75FFFF",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              align: 'start',
              fontSize: 24,
            },
            title: {
              display: true,
              text: "Pie Chart",
            },
          },
        },
      });
    }
  };

  // Function to create the bar chart
  const renderBarChart = () => {
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      chartInstance = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: ['Segment 1'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [10, 20, 30, 40],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              barThickness: 20,
            },
            {
              label: 'Dataset 2',
              data: [20, 30, 10, 50],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              barThickness: 20,
            },
          ],
        },
        options: {
          indexAxis: 'y', // Horizontal bar graph
          scales: {
            x: {
              stacked: true,
              display: false, // Hide x-axis
            },
            y: {
              stacked: true,
              display: false, // Hide y-axis
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            },
          },
        },
      });
    }
  };

  // Function to create the stacked bar chart
const renderStackedBarChart = () => {
  const ctx = chartRef.current?.getContext('2d');
  if (ctx) {
    chartInstance = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: ['Segment 1', 'Segment 2', 'Segment 3'],
        datasets: [
          // First segment
          {
            label: 'Dataset 1',
            data: [10],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            barPercentage: 0.5, // Adjust segment width,
            stack: "s1"
          },
          {
            label: 'Dataset 2',
            data: [20],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            barPercentage: 0.5, // Adjust segment width,
            stack: "s1"
          },
          // Second segment
          {
            label: 'Dataset 3',
            data: [12],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            barPercentage: 0.5, // Adjust segment width,
            stack: "s2",
          },
          {
            label: 'Dataset 4',
            data: [18],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            barPercentage: 0.5, // Adjust segment width,
            stack: "s2"
          },
          // Third segment
          {
            label: 'Dataset 5',
            data: [15],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            barPercentage: 0.5, // Adjust segment width,
            stack: "s3"
          },
          {
            label: 'Dataset 6',
            data: [7.5],
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            barPercentage: 0.5, // Adjust segment width
            stack: "s3"
          },
          {
            label: 'Dataset 7',
            data: [7.5],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            barPercentage: 0.5, // Adjust segment width,
            stack: "s3"
          },
        ],
      },
      options: {
        indexAxis: 'y', // Horizontal bar graph
        scales: {
          x: {
            stacked: true,
            display: false, // Hide x-axis
          },
          y: {
            stacked: true,
            display: false, // Hide y-axis
          },
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        plugins: {
          legend: {
            display: true, // Hide legend
            position: 'bottom',
            align: 'start',
          },
        },
      },
    });
  }
};

   

  // Render the chart based on props type
  useEffect(() => {
    if (props.type === 'barChart') {
      renderBarChart();
      chartRef.current.style.width = '200px';
      chartRef.current.style.height = '200px';
    } else if (props.type === 'stackedBarChart') {
      renderStackedBarChart();
      chartRef.current.style.width = '300px';
      chartRef.current.style.height = '300px';
    } else if (props.type === 'pieChart') {
      renderPieChart();
      // Apply width and height styles only for the pie chart
      chartRef.current.style.width = '524px';
      chartRef.current.style.height = '524px';
    }

    // Clean up function to destroy the chart instance when the component unmounts or props change
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [props.type]);

  // Render the canvas element
  return (
    <div
      style={
        props.type === "pieChart"
          ? { width: "300px", height: "300px" }
          : {} 
          || props.type === "barChart"
          ? { width: "200px", height: "200px" }
          : {}
          || props.type === "stackedBarChart"
          ? { width: "300px", height: "300px" }
          : {}
      }
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Chart;
