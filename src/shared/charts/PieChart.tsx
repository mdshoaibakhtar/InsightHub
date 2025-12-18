import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import type { IPieChartProps } from '../../interfaces/Chart';
import { Box, Typography } from '@mui/material';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = ({ data, title = '', size = 20 }: IPieChartProps) => {
  // Check if all original values are 0
  const allZero = data.every((item) => item.value === 1) && data.length === 3;

  const options = {
    plugins: {
      datalabels: {
        formatter: function (value: number) {
          // Show 0 if all values were originally 0
          const val = allZero ? 0 : Math.round(value);
          return new Intl.NumberFormat('tr-TR').format(val);
        },
        color: 'white' as const,
        font: {
          size: 14,
        },
      },
      legend: {
        position: 'right' as const,
        display: true,
        labels: {
          usePointStyle: false,
          boxWidth: 8,
          boxHeight: 8,
          padding: 8,
        },
      },
      tooltip: {
        enabled: true,
      },
      responsive: true,
    },
    layout: {
      padding: {
        left: 12,
        right: 18,
      },
    },
    maintainAspectRatio: false,
    cutout: '50%',
  };

  const finalData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value && Math.round(item.value)),
        backgroundColor: data.map((item) => item.color),
        borderColor: data.map((item) => item.color),
        borderWidth: 1,
        dataVisibility: new Array(data.length).fill(true),
      },
    ],
  };

  return (
    <Box className='' style={{ width: size * 16, height: size * 10 }}>
      <Typography className='text-md font-bold'>{title}</Typography>
      <Doughnut data={finalData} options={options} width={100} height={100} />
    </Box>
  );
};

export default PieChart;
