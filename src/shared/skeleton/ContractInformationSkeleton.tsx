import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { SkeletonText } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/vstack';

const ContractInformationSkeleton = () => (
  <Box className='bg-white border border-gray-200 rounded-xl shadow-sm p-6'>
    <Grid direction={'row'}  className='gap-8'>
      <Grid direction={'column'} className='gap-2 flex-1'>
        <Skeleton className='h-4 w-24 rounded-md' />
        <Skeleton className='h-5 w-32 rounded-md' />
      </Grid>
      <Grid direction={'column'} className='gap-2 flex-1'>
        <Skeleton className='h-4 w-36 rounded-md' />
        <Skeleton className='h-5 w-20 rounded-md' />
      </Grid>
      <Grid direction={'column'} className='gap-2 flex-1'>
        <Skeleton className='h-4 w-40 rounded-md' />
        <Skeleton className='h-5 w-24 rounded-md' />
      </Grid>
      <Grid direction={'column'} className='gap-2 flex-1'>
        <Skeleton className='h-4 w-28 rounded-md' />
        <Skeleton className='h-5 w-32 rounded-md' />
      </Grid>
      <Grid direction={'column'} className='gap-2 flex-1'>
        <Skeleton className='h-4 w-20 rounded-md' />
        <Skeleton className='h-5 w-16 rounded-md' />
      </Grid>
      <Grid direction={'column'} className='gap-2 flex-1'>
        <Skeleton className='h-4 w-44 rounded-md' />
        <Skeleton className='h-5 w-28 rounded-md' />
      </Grid>
    </Grid>
  </Box>
);

export default ContractInformationSkeleton;
