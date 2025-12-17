import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

import NoDataFound from '../noDataFound/NoDataFoundPrimary';
import { Box, Divider, Typography } from '@mui/material';
import type { IChartProps } from '../../interfaces/Chart';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const BarCharts = ({ title, data }: IChartProps) => {
  const options = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true, beginAtZero: true },
    },
    plugins: { datalabels: { display: false } },
  };

  const hasData = data?.labels?.length > 0 && data?.datasets?.length > 0;

  return (
    <Box className='flex w-full basis-[50%]'>
      <Typography className='text-lg font-bold text-[#0228A0]'>{title}</Typography>
      <Divider className='my-0.5 h-0.5 w-[25%] rounded bg-[#0228A0]' />
      {hasData ? (
        <Chart type='bar' data={data} options={options} width={3000} height={1000} />
      ) : (
        <Box className='h-full justify-center'>
          <NoDataFound />
        </Box>
      )}
    </Box>
  );
};

export default BarCharts;
