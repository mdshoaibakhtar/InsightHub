export interface IChartDataset {
  label: string;
  data: number[];
  type?: 'bar' | 'line' | undefined;
  backgroundColor: string;
}

export interface IChartData {
  labels: string[];
  datasets: IChartDataset[];
}

export interface IChartProps {
  datasets?: IChartDataset[];
  labels?: string[];
  title: string;
  data: IChartData;
}
export interface IPieChartInterfaceItem {
  label: string;
  value: number | undefined;
  color: string;
  cutout: string;
}

export type IPieChartInterface = IPieChartInterfaceItem[];

export interface IPieChartProps {
  data: IPieChartInterface;
  title?: string;
  size?: number;
}
