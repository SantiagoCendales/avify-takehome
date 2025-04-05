import React, {useEffect, useState} from 'react';
import { fetchEnergyGenerationData } from '../Api/fetchEnergyGeneration';
import { IFuelGenerationData } from '../types';
import { EnergyGenerationChart } from './EnergyGenerationChart';

// const colors = [
//   '#8BC34A', // biomass
//   '#616161', // coal
//   '#FF9800', // imports
//   '#FF5722', // gas
//   '#9C27B0', // nuclear
//   '#607D8B', // other
//   '#03A9F4', // hydro
//   '#FFC107', // solar
//   '#00BCD4', // wind
// ];

const labels = [];

export const data = {
  labels,
  datasets: [],
};

export const EnergyGeneration = () => {

  const [energyGenerationData, setEnergyGenerationData] = useState<IFuelGenerationData>();

  useEffect(() => {
    fetchEnergyGenerationData().then((data) => {
      setEnergyGenerationData(data)
    }).catch((error) => {
      console.error('Error fetching energy generation data:', error);
    }
    );
  }, []);

  return (
    <div>
      <h1>Energy Generation</h1>
      <p>This is the Energy Generation component.</p>
      <div>
        {
          energyGenerationData
          ? <EnergyGenerationChart energyGenerationData={energyGenerationData} />
          : <p>No hay data</p>
        }
      </div>
    </div>
  );
}