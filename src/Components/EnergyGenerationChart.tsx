import React from 'react'
import { IFuelGenerationData } from '../types';
import { getEnergyColors } from '../Utils/generateChartColors';
import { options } from '../Utils/chartOptions'

import ChartDataLabels from 'chartjs-plugin-datalabels';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface EnergyGenerationChartProps {
  energyGenerationData: IFuelGenerationData
}

export const EnergyGenerationChart: React.FC<EnergyGenerationChartProps> = ({
  energyGenerationData
}) => {

  const colors = getEnergyColors(energyGenerationData.generationmix);

  const data = {
    labels: energyGenerationData.generationmix.map(data => data.fuel),
    datasets: [
      {
        label: 'Percentage (%)',
        data: energyGenerationData.generationmix.map(data => data.perc),
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      }
    ],
  }
  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}