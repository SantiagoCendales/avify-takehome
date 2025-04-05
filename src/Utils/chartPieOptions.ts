import { ChartOptions } from 'chart.js';

export const pieChartOptions: ChartOptions<'pie'> = {
  plugins: {
    legend: {
      position: 'top',
    },
    datalabels: {
      color: '#000',
      formatter: (value: number, context: any) => {
        const total = context.chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
        const percentage = ((value / total) * 100).toFixed(1);
        return `${percentage}%`;
      },
      font: {
        weight: 'bold',
        size: 16,
      },
      display: function (context: any) {
        const value = context.dataset.data[context.dataIndex];
        return value !== 0; // 👈 No muestra el label si el valor es 0
      },
    },
  },
};