import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { IFuelGenerationData } from '../types';
import { getEnergyColors } from '../Utils/generateChartColors';
import { pieChartOptions } from '../Utils/chartPieOptions';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: [],
      data: [],
      borderWidth: 1,
    },
  ],
};

interface EnergyGenerationPieChartProps {
  energyGenerationData: IFuelGenerationData
}

export const EnergyGenerationPieChart: React.FC<EnergyGenerationPieChartProps> = ({
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
    <div className="chart-container">
      <Pie data={data} options={pieChartOptions} />
    </div>
  )
}
