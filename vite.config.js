import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chart.js', 'react-chartjs-2'], // Add dependencies you want to exclude from optimization here
  },
  server: {
    hmr: {
      overlay: false, // You can disable the error overlay if it’s too intrusive
    },
  },
});
