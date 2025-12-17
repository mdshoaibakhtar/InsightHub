import { SkeletonText } from '@/components/ui/skeleton';
import { VStack } from '@/components/ui/vstack';

const AppAccordionSkeleton = () => (
  <Grid direction={'column'} className='border rounded-lg p-4 gap-3 w-[49%]'>
    <Skeletongap={0} className='h-5 w-48 rounded-md' />
    <SkeletonText _lines={5} className='h-12 w-full rounded-md' />
  </Grid>
);

export default AppAccordionSkeleton;
