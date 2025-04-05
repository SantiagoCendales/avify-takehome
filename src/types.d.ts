export interface FuelGenerationMix {
  fuel: string,
  perc: number
}

export interface IFuelGenerationData {
  from: string,
  to: string,
  generationmix: FuelGenerationMix[]
}