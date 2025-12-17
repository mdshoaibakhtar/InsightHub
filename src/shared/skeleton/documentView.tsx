import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/vstack';

const DocumentViewSkeleton = () => (
  <>
    {/* Skeleton Header */}
    <Box className='border-b border-gray-200 px-4 py-3 bg-gray-50 rounded-t-lg'>
      <Grid direction={'row'}  className='justify-between items-center'>
        <Grid direction={'column'} className='w-[60%] gap-1'>
          <Skeleton className='h-5 w-48 rounded' />
          <Skeleton className='h-3 w-32 rounded' />
          <Skeleton className='h-3 w-40 rounded' />
        </Grid>
        <Grid direction={'row'}  className='items-center gap-2'>
          <Skeleton className='h-10 w-10 rounded-full' />
          <Skeleton className='h-4 w-16 rounded' />
          <Skeleton className='h-10 w-10 rounded-full' />
        </Grid>
      </Grid>
    </Box>

    {/* Skeleton Document Area */}
    <Box className='p-4'>
      <Skeleton variant='rounded' className='h-[450px]' />
    </Box>
  </>
);

export default DocumentViewSkeleton;
