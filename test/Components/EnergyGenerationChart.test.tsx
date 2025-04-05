import React from 'react';
import { render, screen } from '@testing-library/react';
import { EnergyGenerationChart } from '../../src/Components/EnergyGenerationChart';
import { IFuelGenerationData } from '../../src/types';

// Mock del Bar chart para evitar errores con canvas
jest.mock('react-chartjs-2', () => ({
  Bar: (props: any) => (
    <div data-testid="mock-bar-chart">{JSON.stringify(props.data)}</div>
  ),
}));

// ✅ Mock de getEnergyColors
jest.mock('../../src/Utils/generateChartColors', () => ({
  getEnergyColors: jest.fn(() => ['#111111']),
}));

jest.mock('../../src/Utils/chartOptions', () => ({
  options: {},
}));

describe('EnergyGenerationChart', () => {
  const mockData: IFuelGenerationData = {
    from: '2019-08-12T12:30Z',
    to: '2019-08-12T12:30Z',
    generationmix: [
      { fuel: 'coal', perc: 25 }
    ],
  };

  it('renders without crashing', () => {
    render(<EnergyGenerationChart energyGenerationData={mockData} />);
    const chart = screen.getByTestId('mock-bar-chart');
    expect(chart).toBeInTheDocument();
  });

  it('renders chart with correct labels and data', () => {
    render(<EnergyGenerationChart energyGenerationData={mockData} />);
    const chart = screen.getByTestId('mock-bar-chart');
    const parsed = JSON.parse(chart.textContent || '{}');

    expect(parsed.labels).toEqual(['coal']);
    expect(parsed.datasets[0].data).toEqual([25]);
    expect(parsed.datasets[0].backgroundColor).toEqual(['#111111']);
  });
});