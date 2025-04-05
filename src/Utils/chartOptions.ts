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
      text: 'Generación de energía en el Reino Unido',
    },
  },
};