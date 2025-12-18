/* eslint-disable react-hooks/static-components */
import { Box, Grid, Skeleton } from "@mui/material";

const MetricsCardsSkeleton = () => {
  const MetricSkeletonCard = ({ valueWidth = 'w-16' }) => (
    <Box className='flex w-full items-center p-5'>
      <Grid direction={'column'} className='w-full gap-4'>
        <Grid direction={'row'}  className='w-full justify-between items-center gap-6'>
          <Skeleton className='h-4 w-32 rounded-md' />
          <Skeleton className='h-5 w-5 rounded-md' />
        </Grid>
        <Grid direction={'row'}  className='w-full justify-between'>
          <Skeleton className={`h-8 ${valueWidth} rounded-md`} />
        </Grid>
      </Grid>
    </Box>
  );

  const MetricCardRow = ({ widths }: { widths: string[] }) => (
    <Box className='w-[75vw] flex flex-row'>
      {widths.map((w, i) => (
        <MetricSkeletonCard key={i} valueWidth={w} />
      ))}
    </Box>
  );

  return (
    <Grid direction={'row'}  className='bg-white flex-col shadow-xl rounded-xl p-4 h-[32vh]'>
      {/* Title and Dropdown */}
      <Grid direction={'row'}  className='p-1 py-2 mb-2 items-center w-full'>
        <Skeleton className='h-8 w-64 rounded-md' />
      </Grid>

      <Grid direction={'row'} >
        {/* Cards Section */}
        <Box className='flex flex-col gap-4'>
          {/* Row 1 */}
          <MetricCardRow widths={['w-16', 'w-16', 'w-16', 'w-20']} />

          {/* Row 2 */}
          <MetricCardRow widths={['w-16', 'w-16', 'w-16', 'w-16']} />
        </Box>

        {/* Secondary Pie Chart */}
        <Box className='w-[20vw] items-center justify-center'>
          <Grid direction={'column'} className='gap-3'>
            <Skeleton className='h-5 w-16 rounded-md' />
            <Skeleton className='h-32 w-32 rounded-full' />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MetricsCardsSkeleton;
