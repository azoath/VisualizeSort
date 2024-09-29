import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

// Registering the components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const bubblegraph = ({ array, currentComparisonIndices, swappedIndices, sortedIndices }) => {
    const data = {
        labels: array.map((_, idx) => idx),
        datasets: [
          {
            label: 'Array Values',
            data: array,
            backgroundColor: array.map((_, idx) =>
              swappedIndices.includes(idx) ? 'rgba(255, 99, 132, 0.8)' : // Swapped
              currentComparisonIndices.includes(idx) ? 'rgba(54, 162, 235, 0.8)' : // Comparing
              sortedIndices.includes(idx) ? 'rgba(75, 192, 192, 0.8)' : // Sorted
              'rgba(153, 102, 255, 0.8)' // Default
            ),
            borderColor: array.map((_, idx) =>
              swappedIndices.includes(idx) ? 'rgba(255, 99, 132, 1)' : // Swapped
              currentComparisonIndices.includes(idx) ? 'rgba(54, 162, 235, 1)' : // Comparing
              sortedIndices.includes(idx) ? 'rgba(75, 192, 192, 1)' : // Sorted
              'rgba(153, 102, 255, 1)' // Default
            ),
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        maintainAspectRatio: false,
      };
  return (
    <div style={{ width: '100%', height: '300px' }}>
    <Bar data={data} options={options} />
  </div>
  )
}

export default bubblegraph
