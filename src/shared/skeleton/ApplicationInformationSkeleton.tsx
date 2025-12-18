import { Box, Grid, Skeleton } from "@mui/material";

const ApplicationInformationSkeleton = () => (
  <Grid direction={'column'} className='px-6 py-2 gap-4'>
    {/* Top Section Skeleton */}
    <Grid direction={'row'}  className='items-center justify-between py-[6px]'>
      {/* Left: Back button and Names Skeleton */}
      <Grid direction={'row'}  className='items-center'>
        <Grid direction={'column'} className='gap-1'>
          <Skeleton className='h-5 w-64 rounded-md' />
          <Skeleton className='h-6 w-96 rounded-md' />
        </Grid>
      </Grid>
      {/* Right: Action Buttons Skeleton */}
      <Grid direction={'row'}  className='items-center gap-3'>
        <Skeleton className='h-12 w-32 rounded-md' />
        <Skeleton className='h-12 w-32 rounded-md' />
        <Skeleton className='h-12 w-32 rounded-md' />
        <Skeleton className='h-12 w-12 rounded-md' />
      </Grid>
    </Grid>
    {/* Bottom Section - Application Details Card Skeleton */}
    <Box className='bg-white rounded-xl shadow-sm p-6'>
      <Grid direction={'row'}  className='gap-8'>
        <Grid direction={'column'} className='gap-2 flex-1'>
          <Skeleton className='h-4 w-24 rounded-md' />
          <Skeleton className='h-5 w-32 rounded-md' />
        </Grid>
        <Grid direction={'column'} className='gap-2 flex-1'>
          <Skeleton className='h-4 w-32 rounded-md' />
          <Skeleton className='h-5 w-28 rounded-md' />
        </Grid>
        <Grid direction={'column'} className='gap-2 flex-1'>
          <Skeleton className='h-4 w-36 rounded-md' />
          <Skeleton className='h-5 w-24 rounded-md' />
        </Grid>
        <Grid direction={'column'} className='gap-2 flex-1'>
          <Skeleton className='h-4 w-40 rounded-md' />
          <Skeleton className='h-5 w-20 rounded-md' />
        </Grid>
        <Grid direction={'column'} className='gap-2 flex-[1.5]'>
          <Skeleton className='h-4 w-36 rounded-md' />
          <Skeleton className='h-5 w-64 rounded-md' />
        </Grid>
      </Grid>
    </Box>
  </Grid>
);

export default ApplicationInformationSkeleton;
