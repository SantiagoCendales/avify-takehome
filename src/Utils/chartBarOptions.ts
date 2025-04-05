import { ChartOptions } from 'chart.js';

export const barChartOptions: ChartOptions<'bar'> = {
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
    datalabels: {
      anchor: 'end',
      align: 'end',
      formatter: (value: number) => {
        return value + '%';
      },
      font: {
        weight: 'bold',
        size: 16,
      },
      color: '#000'
    }
  },
};