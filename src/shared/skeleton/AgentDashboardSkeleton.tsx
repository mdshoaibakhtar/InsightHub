

import { Box, Grid, Skeleton } from '@mui/material';
import BarGraphSkeleton from './dashboard/barGraphSkeleton';
import MetricsCardsSkeleton from './dashboard/metricsCard';

const AgentDashboardSkeleton = () => (
  <Grid direction={'column'} className='h-fit gap-2 p-4'>
    {/* Top Section: Agent Profile and Qualifications */}
    <Box className='flex flex-row bg-white shadow-xl rounded-xl py-4 px-4 w-full justify-between gap-10 h-[23vh]'>
      <Box className='w-full flex flex-row justify-around items-center'>
        {/* Agent Details - Left side */}
        <Box className='w-[33%] flex justify-center items-center'>
          <Grid direction={'row'}  className='items-center gap-4 h-full w-full'>
            {/* Profile Icon */}
            <Box className='flex items-center justify-center h-full w-32'>
              <Skeleton className='h-28 w-28 rounded-md' />
            </Box>
            {/* Agent Information */}
            <Grid direction={'column'} className='flex-1 justify-center gap-2'>
              <Skeleton className='h-8 w-40 rounded-md' />
              <Skeleton className='h-4 w-48 rounded-md' />
              <Skeleton className='h-4 w-36 rounded-md' />
              <Skeleton className='h-4 w-44 rounded-md' />
            </Grid>
          </Grid>
        </Box>
        {/* Active Qualifications - Right side */}
        <Box className='w-[33%] flex justify-center items-center'>
          <Grid direction={'column'} className='gap-2'>
            <Skeleton className='h-5 w-36 rounded-md' />
            <Grid direction={'column'} className='gap-1'>
              <Skeleton className='h-4 w-28 rounded-md' />
              <Skeleton className='h-4 w-32 rounded-md' />
              <Skeleton className='h-4 w-24 rounded-md' />
            </Grid>
          </Grid>
        </Box>
        <Box className='w-[33%] flex justify-center items-center px-4'>
          <Skeleton className='h-6 w-28 rounded-md' />
        </Box>
      </Box>
    </Box>

    {/* Middle Section: Analytics Charts and Actions */}
    <Box className='flex flex-row bg-white shadow-xl rounded-xl p-4 w-full h-[36vh] gap-4 justify-around'>
      {/* Bar Chart - Review History */}
      <Box>
        <Grid direction={'column'} className='gap-3'>
          <Skeleton className='h-6 w-48 rounded-md' />
          <BarGraphSkeleton />
        </Grid>
      </Box>
      {/* Pie Chart - Primary analytics */}
      <Box className='w-[30vw]'>
        <Grid direction={'column'} className='gap-3'>
          <Skeleton className='h-6 w-32 rounded-md ml-12 ' />
          <Skeleton className='h-48 w-48 rounded-full ml-12' />
        </Grid>
      </Box>
      {/* Action Buttons */}
      <Box className='w-[30vw]'>
        <Grid direction={'column'} className='gap-4 justify-center h-full'>
          <Skeleton className='h-12 w-full rounded-md' />
          <Skeleton className='h-12 w-full rounded-md' />
          <Skeleton className='h-12 w-full rounded-md' />
        </Grid>
      </Box>
    </Box>

    {/* Bottom Section: Metrics Overview Cards and Secondary Chart */}
    <MetricsCardsSkeleton />
  </Grid>
);

export default AgentDashboardSkeleton;
