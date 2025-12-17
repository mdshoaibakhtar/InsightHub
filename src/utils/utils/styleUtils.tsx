import type { IChartData, IChartDataset } from "../../interfaces/Chart";

export const getStatusStyles = (status: string) => {
  const eachStatus = status?.toUpperCase?.() || '';

  switch (eachStatus) {
    case 'CONFIRMED':
      return {
        backgroundColor: 'rgb(220 252 231)', // green-100
        borderColor: 'rgb(187 247 208)', // green-300
        color: 'rgb(21 128 61)', // green-700
      };

    case 'FORCE_CHANGE_PASSWORD':
      return {
        backgroundColor: 'rgb(254 249 195)', // yellow-100
        borderColor: 'rgb(253 230 138)', // yellow-300
        color: 'rgb(133 77 14)', // yellow-800
      };

    case 'RESET_REQUIRED':
      return {
        backgroundColor: 'rgb(254 202 202)', // red-200
        borderColor: 'rgb(252 165 165)', // red-300
        color: 'rgb(185 28 28)', // red-700
      };

    default:
      return {
        backgroundColor: 'rgb(243 244 246)', // gray-100
        borderColor: 'rgb(209 213 219)', // gray-300
        color: 'rgb(75 85 99)', // gray-600
      };
  }
};

export const getTextStyle = (status: string) => {
  const eachStatus = status?.toUpperCase?.() || '';

  switch (eachStatus) {
    case 'CONFIRMED':
      return {
        color: 'rgb(21 128 61)', // green-700
      };

    case 'FORCE_CHANGE_PASSWORD':
      return {
        color: 'rgb(133 77 14)', // yellow-800
      };

    case 'RESET_REQUIRED':
      return {
        color: 'rgb(185 28 28)', // red-700
      };

    default:
      return {
        color: 'rgb(75 85 99)', // gray-600
      };
  }
};

export const getChipStyles = (status: string) => {
  const eachStatus = status?.toUpperCase?.() || '';

  switch (eachStatus) {
    case 'SUCCESS':
      return {
        backgroundColor: 'rgb(220 252 231)', // green-100
        borderColor: 'rgb(187 247 208)', // green-300
        color: 'rgb(21 128 61)', // green-700
      };

    case 'WARNING':
      return {
        backgroundColor: 'rgb(254 249 195)', // yellow-100
        borderColor: 'rgb(253 230 138)', // yellow-300
        color: 'rgb(133 77 14)', // yellow-800
      };

    case 'FAILURE':
      return {
        backgroundColor: 'rgb(254 202 202)', // red-200
        borderColor: 'rgb(252 165 165)', // red-300
        color: 'rgb(185 28 28)', // red-700
      };

    default:
      return {
        backgroundColor: 'rgb(243 244 246)', // gray-100
        borderColor: 'rgb(209 213 219)', // gray-300
        color: 'rgb(75 85 99)', // gray-600
      };
  }
};

export const getChipTextStyles = (status: string) => {
  const eachStatus = status?.toUpperCase?.() || '';

  switch (eachStatus) {
    case 'SUCCESS':
      return {
        color: 'rgb(21 128 61)', // green-700
      };

    case 'WARNING':
      return {
        color: 'rgb(133 77 14)', // yellow-800
      };

    case 'FAILURE':
      return {
        color: 'rgb(185 28 28)', // red-700
      };

    default:
      return {
        color: 'rgb(75 85 99)', // gray-600
      };
  }
};

export const getColorsCode = (type: boolean) =>
  type
    ? ['#031F72', '#DE2427']
    : ['#0d90bf', '#AE9427', '#DE9427', '#00b096', '#9121c4', '#db3599', '#db3556'];

export function createColorPicker(colors: string[]) {
  let index = 0;
  return () => colors[index++ % colors.length];
}

export const handleGraphColors = (graphData: IChartData, isReview: boolean): IChartData => {
  const getColor = createColorPicker(getColorsCode(isReview));

  const updatedDatasets: IChartDataset[] = graphData.datasets.map((ds) => ({
    label: ds.label,
    data: ds.data,
    backgroundColor: getColor(),
    type: ds.type, // if needed
  }));

  return {
    labels: graphData.labels ?? [],
    datasets: updatedDatasets,
  };
};

export const ensureChartData = (data?: IChartData): IChartData => ({
  labels: data?.labels ?? [],
  datasets: data?.datasets ?? [],
});
