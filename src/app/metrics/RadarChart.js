"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components for the Doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF4384", "#2C8CDB", "#FFAB56", "#3E8A3A"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
