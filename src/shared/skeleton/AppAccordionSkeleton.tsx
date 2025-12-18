import { Grid, Skeleton } from "@mui/material";

const AppAccordionSkeleton = () => (
  <Grid direction={'column'} className='border rounded-lg p-4 gap-3 w-[49%]'>
    <Skeleton className='h-12 w-full rounded-md' />
  </Grid>
);

export default AppAccordionSkeleton;
