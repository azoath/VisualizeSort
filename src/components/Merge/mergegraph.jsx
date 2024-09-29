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


const mergegraph = ({ array, mergeIndices }) => {
    const data = {
        labels: array.map((_, idx) => idx),
        datasets: [
          {
            label: 'Array Values',
            data: array,
            backgroundColor: array.map((_, idx) => {
              // Highlight colors for merge indices
              const [leftIndices, rightIndices] = mergeIndices;
              if (leftIndices.includes(idx) || rightIndices.includes(idx)) {
                return 'lightgreen'; // Color for elements being merged
              }
              return 'lightcoral'; // Default color
            }),
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
  )
}

export default mergegraph
