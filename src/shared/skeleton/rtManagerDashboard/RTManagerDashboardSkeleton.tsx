import { Box, Divider, Grid, Skeleton } from '@mui/material';
import BarGraphSkeleton from '../dashboard/barGraphSkeleton';

import SLAPerformanceSkeleton from './SLAPerformanceSkeleton';

const RTManagerDashboardSkeleton = () => (
  <Grid direction={'column'} className='h-fit gap-4 p-4'>
    {/* Top Section: Queue */}
    <Box className='flex flex-row bg-white shadow-xl rounded-xl py-4 px-4 w-full h-[24vh] justify-between gap-10'>
      <Box className='w-full flex flex-row p-4'>
        <Grid direction={'column'} className='w-full'>
          <Skeleton className='h-8 w-40 rounded-md ml-4' />
          <Box className='mt-5 flex flex-row'>
            <Skeleton className='h-[10vh] w-44 rounded-md ml-4' />
            <Skeleton className='h-[10vh] w-44 rounded-md' />
          </Box>
        </Grid>
        <Divider className='m-0.5 mx-4' orientation='vertical' />
        <Grid direction={'column'} className='w-full'>
          <Grid direction={'column'} className='w-full'>
            <Skeleton className='h-8 w-40 rounded-md ml-4' />
            <Box className='mt-5 flex flex-col gap-3'>
              <Skeleton className='h-10 w-[350px] rounded-md ml-4' />
              <Skeleton className='h-10 w-[350px] rounded-md ml-4' />
            </Box>
          </Grid>
        </Grid>
        <Divider className='m-0.5 mx-4' orientation='vertical' />
        <Grid direction={'column'} className='w-full'>
          <Grid direction={'column'} className='w-full'>
            <Skeleton className='h-8 w-40 rounded-md ml-4' />
            <Box className='mt-5 flex flex-col gap-2'>
              <Skeleton className='h-4 w-[350px] rounded-md ml-4' />
              <Skeleton className='h-4 w-[350px] rounded-md ml-4' />
              <Skeleton className='h-4 w-[350px] rounded-md ml-4' />
              <Skeleton className='h-4 w-[350px] rounded-md ml-4' />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>

    {/* Middle Section: Graph */}
    <Box className='flex flex-row bg-white shadow-xl rounded-xl p-4 w-full h-[35vh] gap-4 justify-around'>
      {/* Bar Chart - Review History */}
      <Box className='flex-1'>
        <Grid direction={'column'} className='gap-3'>
          <Skeleton className='h-6 w-48 rounded-md' />
          <BarGraphSkeleton />
        </Grid>
      </Box>
      <Box className='flex-1'>
        <Grid direction={'column'} className='gap-3'>
          <Skeleton className='h-6 w-48 rounded-md' />
          <BarGraphSkeleton />
        </Grid>
      </Box>
    </Box>

    {/* Bottom Section: Metrics Overview Cards and Secondary Chart */}
    <Box className='h-[23.5vh]'>
      <SLAPerformanceSkeleton />
    </Box>
  </Grid>
);

export default RTManagerDashboardSkeleton;
