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
            "Flexi Cap Fund 32.19%",
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
          // responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              align: 'start',
              fontSize: 12,
              display: 'flex',
              family: 'IBM Plex Sans'
            },
            title: {
              display: true,
              // text: "Pie Chart",
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
              label: 'Equity 32.19%',
              data: [32.19],
              backgroundColor: '#75D6FF',
              barThickness: 20,
            },
            {
              label: 'Gold 26.04%',
              data: [26.40],
              backgroundColor: '#75FFFF',
              barThickness: 20,
            },
            {
              label: 'Bonds 26.40%',
              data: [26.04],
              backgroundColor: '#AA75FF',
              barThickness: 20,
            },
            {
              label: 'Govt. Securities 26.40%',
              data: [20],
              backgroundColor: '#FF7BF2',
              barThickness: 20,
            },
            {
              label: 'Dataset 5',
              data: [26.40],
              backgroundColor: '#FFC46A',
              barThickness: 20,
            },
            {
              label: 'Dataset 6',
              data: [20],
              backgroundColor: '#FF8E5D',
              barThickness: 20,
            },
          ],
        },
        options: {
          // responsive: true,
          aspectRatio: 1, // Set aspect ratio to 1 for full width
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
              // display: true, // Hide legend
              position: 'bottom',
              align: 'start',
              display: 'flex',
              family: 'IBM Plex Sans',
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
              label: 'Oil & Gas 32.19%',
              data: [15],
              backgroundColor: '#75D6FF',
              barThickness: 10, // Adjust segment width,
              stack: 'Segment 1'
            },
            {
              label: 'Private Bank 26.04%',
              data: [15],
              backgroundColor: '#75FFFF',
              barThickness: 10, // Adjust segment width,
              stack: 'Segment 1'
            },
            // Second segment
            {
              label: 'Pharmaceuticals 26.40%',
              data: [12],
              backgroundColor: '#AA75FF',
              barThickness: 10, // Adjust segment width,
              stack: 'Segment 2'
            },
            {
              label: 'Construction 12.03%',
              data: [18],
              backgroundColor: '#FF7BF2',
              barThickness: 10, // Adjust segment width,
              stack: 'Segment 2'
            },
            // Third segment
            {
              label: 'Power Generation 26.40%',
              data: [10],
              backgroundColor: '#FFD875',
              barThickness: 15, // Adjust segment width,
              stack: 'Segment 3'
            },
            {
              label: 'Other 12.03%',
              data: [10],
              backgroundColor: '#FFC46A',
              barThickness: 15, // Adjust segment width
              stack: 'Segment 3'
            },
            {
              label: 'Dataset 7',
              data: [10],
              backgroundColor: '#FF8E5D',
              barThickness: 15, // Adjust segment width,
              stack: 'Segment 3'
            },
          ],
        },
        options: {
          // responsive: true,
          indexAxis: 'y', // Horizontal bar graph
          scales: {
            x: {
              stacked: true,
              // display: false, // Hide x-axis
            },
            y: {
              stacked: true,
              // display: false, // Hide y-axis
              // ticks: {
              //   // Customize the height of the y-axis ticks as needed
              //   stepSize: 20, // Adjust step size to change the height
              // },
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
              // display: true, // Hide legend
              position: 'bottom',
              align: 'start',
              display: 'flex',
              family: 'IBM Plex Sans',
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
      chartRef.current.style.width = '100%';
      // chartRef.current.style.height = '400px';
    } else if (props.type === 'stackedBarChart') {
      renderStackedBarChart();
      chartRef.current.style.width = '100%';
      // chartRef.current.style.height = '400px';
    } else if (props.type === 'pieChart') {
      renderPieChart();
      chartRef.current.style.width = '100%';
      chartRef.current.style.height = '400px';
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
          ? { width: "100%", height: "400px" }
          : {} 
          || props.type === "barChart"
          ? { width: "100%" }
          : {}
          || props.type === "stackedBarChart"
          ? { width: "100%" }
          : {}
      }
    >
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Chart;
