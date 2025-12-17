/* eslint-disable react-hooks/static-components */
import { Box, Grid, Skeleton } from "@mui/material";

const SLAPerformanceSkeleton = () => {
  const MetricSkeletonCard = ({ valueWidth = 'w-16' }) => (
    <Box className='flex w-full items-center px-2 py-3'>
      <Grid direction={'column'} className='w-full gap-4'>
        <Grid direction={'row'} className='w-full justify-between items-center gap-10'>
          <Skeleton className='h-6 w-36 rounded-md' />
          <Skeleton className='h-6 w-8 rounded-md' />
        </Grid>
        <Grid direction={'row'}  className='w-full justify-between'>
          <Skeleton className={`h-10 ${valueWidth} rounded-md`} />
        </Grid>
      </Grid>
    </Box>
  );

  const MetricCardRow = ({ widths }: { widths: string[] }) => (
    <Box className='w-[76vw] flex flex-row'>
      {widths.map((w, i) => (
        <MetricSkeletonCard key={i} valueWidth={w} />
      ))}
    </Box>
  );

  return (
    <Grid direction={'row'}  className='bg-white flex-col shadow-xl rounded-xl p-4 h-[32vh] w-full'>
      {/* Title and Dropdown */}
      <Grid direction={'row'}  className='p-1 py-2 mb-2 items-center w-full flex justify-between'>
        <Skeleton className='h-8 w-64 rounded-md' />
        {/* <Box className='w-full flex border justify-center items-center'>
          <Skeleton className='h-8 w-64 rounded-md' />
        </Box> */}
      </Grid>

      <Grid direction={'row'}  className='w-full justify-between'>
        {/* Cards Section */}
        <Box className='flex flex-col gap-4'>
          {/* Row 1 */}
          <MetricCardRow widths={['w-16', 'w-16', 'w-16', 'w-20']} />

          {/* Row 2 */}
          <MetricCardRow widths={['w-16', 'w-16', 'w-16', 'w-16']} />
        </Box>

        {/* Secondary Pie Chart */}
        <Box className='items-center justify-center w-[24vw]'>
          <Grid direction={'column'} className='gap-3 flex flex-row'>
            <Skeleton className='h-32 w-32 rounded-full' />
            <Grid direction={'column'} className='gap-4'>
              <Skeleton className='h-5 w-[100px] rounded-md' />
              <Skeleton className='h-5 w-[100px] rounded-md' />
              <Skeleton className='h-5 w-[100px] rounded-md' />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SLAPerformanceSkeleton;
