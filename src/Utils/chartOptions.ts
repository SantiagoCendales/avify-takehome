import { ChartOptions } from 'chart.js';

export const options: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false
    },
    title: {
      display: true,
      text: 'Energy generation in UK',
    },
  },
};