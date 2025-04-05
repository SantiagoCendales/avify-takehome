export const fuelColors: Record<string, string> = {
  biomass: '#8BC34A',
  coal: '#616161',
  imports: '#FF9800',
  gas: '#FF5722',
  nuclear: '#9C27B0',
  other: '#607D8B',
  hydro: '#03A9F4',
  solar: '#FFC107',
  wind: '#00BCD4',
};

export const getEnergyColors = (generationmix: { fuel: string }[]) => {
  return generationmix.map(item => fuelColors[item.fuel] || '#CCCCCC');
};