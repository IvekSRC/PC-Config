export interface VideoCardInterface {
  id: number;
  name: string;
  chipset: string;
  memory: number;
  coreClock: number;
  boostClock: number;
  price: number;
  image: string;
  selected: boolean;
}