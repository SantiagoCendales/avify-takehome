import React, {useEffect, useState} from 'react';
import { fetchEnergyGenerationData } from '../Api/fetchEnergyGeneration';
import { IFuelGenerationData } from '../types';
import { EnergyGenerationChart } from './EnergyGenerationChart';
import { EnergyGenerationPieChart } from './EnergyGenerationPieChart';

export const data = {
  labels: [],
  datasets: [],
};

type ChartType = 'bar' | 'pie';

export const EnergyGeneration = () => {

  const [energyGenerationData, setEnergyGenerationData] = useState<IFuelGenerationData>();
  const [ selectedChart, setSelectedChart ] = useState<ChartType>('bar');
  useEffect(() => {
    fetchEnergyGenerationData().then((data) => {
      setEnergyGenerationData(data)
    }).catch((error) => {
      console.error('Error fetching energy generation data:', error);
    }
    );
  }, []);

  const chartsComponents = {
    bar: <EnergyGenerationChart energyGenerationData={energyGenerationData} />,
    pie: <EnergyGenerationPieChart energyGenerationData={energyGenerationData} />,
  };

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Energy Generation</h1>
        <p className="">Aquí podrás encontrar datos sobre los tipos de generación de energía en el Reino Unido</p>
      </div>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => setSelectedChart('pie')}>Pie Chart</button>
          <button onClick={() => setSelectedChart('bar')}>Bar Chart</button>
        </div>
        <div style={{ width: '100%', height: '100%' }}>
          {energyGenerationData && chartsComponents[selectedChart]}
        </div>
      </div>
    </div>
  );
}