import { IFuelGenerationData } from "../types";

export const fetchEnergyGenerationData = async () => {
  const url = `https://api.carbonintensity.org.uk/generation`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const { data }: {data: IFuelGenerationData} = await response.json();
    return {
      from: data.from,
      to: data.to,
      generationmix: data.generationmix.map((item) => ({
        fuel: item.fuel,
        perc: item.perc,
      })),
    };
  } catch (error) {
    console.error('Error fetching fuel data:', error);
    throw error;
  }
}