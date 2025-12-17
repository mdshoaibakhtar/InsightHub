/* eslint-disable react-hooks/static-components */
import { Box, Grid, Skeleton } from "@mui/material";

const BarGraphSkeleton = () => {
  const BarSkeleton = ({ height }: { height: string }) => (
    <Grid direction={'column'} className='items-center gap-2'>
      <Skeleton className={`w-8 ${height} rounded-sm`} />
      <Skeleton className='h-3 w-10 rounded-sm' />
    </Grid>
  );

  return (
    <Box className='flex h-full w-full items-center'>
      {/* Bar Chart */}
      <Grid direction={'row'}  className='items-end gap-4 h-full w-full p-6'>
        <BarSkeleton height='h-20 w-10' />
        <BarSkeleton height='h-32 w-10' />
        <BarSkeleton height='h-16 w-10' />
        <BarSkeleton height='h-28 w-10' />
        <BarSkeleton height='h-24 w-10' />
        <BarSkeleton height='h-40 w-10' />
        <BarSkeleton height='h-16 w-10' />
        <BarSkeleton height='h-28 w-10' />
        <BarSkeleton height='h-32 w-10' />
        <BarSkeleton height='h-16 w-10' />
        <BarSkeleton height='h-24 w-10' />
        <BarSkeleton height='h-28 w-10' />
      </Grid>
    </Box>
  );
};

export default BarGraphSkeleton;
