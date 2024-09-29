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


const selectiongraph = ({ array, currentMinIndex, sortedUntilIndex }) => {
    const data = {
        labels: array.map((_, idx) => idx),
        datasets: [
          {
            label: 'Array Values',
            data: array,
            backgroundColor: array.map((_, idx) =>
              idx === currentMinIndex ? 'lightgreen' : idx <= sortedUntilIndex ? 'lightblue' : 'lightcoral'
            ),
            borderColor: 'rgba(75, 192, 192, 1)',
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
      );
}

export default selectiongraph
