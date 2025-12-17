import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IOverViewCardInterface } from '../../interfaces/DashboardInterface';
import { Box, Typography } from '@mui/material';

const OverviewCard = ({ icon, title, value, isPercentage }: IOverViewCardInterface) => (
  <Box className='flex w-full items-center p-4 flex-col'>
    <Box className='flex w-full flex-row justify-between items-center'>
      <Typography className='text-[14.5px] text-slate-700'>{title}</Typography>
      <Box>
        <FontAwesomeIcon icon={icon} className='text-xl' color={'#031F72'} />
      </Box>
    </Box>
    <Box className='flex w-full flex-row justify-between mt-2'>
      {isPercentage ? (
        <Box className='flex flex-row items-baseline'>
          <Typography
            className={`${value} text-[#031F72] ${typeof value === 'string' ? 'text-sm' : 'text-[24px]'}`}
          >
            {typeof value === 'number' ? value.toFixed(2) : value}
          </Typography>
          <Typography className='text-[#031F72] text-[14px] ml-[2px]'>%</Typography>
        </Box>
      ) : (
        <Typography className={`text-slate-700 ${typeof value === 'string' ? 'text-lg' : 'text-[24px]'}`}>
          {typeof value === 'number' ? Math.ceil(value) : value}
        </Typography>
      )}
    </Box>
  </Box>
);

export default OverviewCard;
