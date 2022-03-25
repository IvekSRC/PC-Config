export interface CPUInterface {
  id: number;
  name: string;
  coreCount: number;
  performanceCoreClock: number;
  performanceBoostClock: number;
  tdp: number;
  integratedGraphics: string;
  price: number;
  image: string;
  selected: boolean;
}