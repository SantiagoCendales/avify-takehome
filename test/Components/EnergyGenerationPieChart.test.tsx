import React from 'react';
import { render, screen } from '@testing-library/react';
import { EnergyGenerationPieChart } from '../../src/Components/EnergyGenerationPieChart';
import { IFuelGenerationData } from '../../src/types';

jest.mock('react-chartjs-2', () => ({
  Pie: (props: any) => <div data-testid="mock-pie-chart">{JSON.stringify(props.data)}</div>,
}));

describe('EnergyGenerationPieChart', () => {
  const mockData: IFuelGenerationData = {
    from: '2019-08-12T12:30Z',
    to: '2019-08-12T12:30Z',
    generationmix: [
      { fuel: 'gas', perc: 30 }
    ]
  };

  it('renders without crashing', () => {
    render(<EnergyGenerationPieChart energyGenerationData={mockData} />);
    const chart = screen.getByTestId('mock-pie-chart');
    expect(chart).toBeInTheDocument();
  });

  it('renders chart with correct labels and data', () => {
    render(<EnergyGenerationPieChart energyGenerationData={mockData} />);
    const chart = screen.getByTestId('mock-pie-chart');
    const parsed = JSON.parse(chart.textContent || '{}');

    expect(parsed.labels).toEqual(['gas']);
    expect(parsed.datasets[0].data).toEqual([30]);
  });
});