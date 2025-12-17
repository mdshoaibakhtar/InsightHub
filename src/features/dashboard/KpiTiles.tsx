import { Divider, Grid, Typography } from '@mui/material';

export interface IKpiPropsInterafce {
  title: string;
  value: string | number;
}
const KpiTiles = ({ title, value }: IKpiPropsInterafce) => (
  <Grid direction={'row'} className='flex flex-col w-full items-start gap-2 border rounded-md shadow-hard-1 p-2 h-fit'>
    {/* KPI Summary Tiles */}
    <Grid className='flex w-full flex-col'>
      <Typography className='text-[17px] text-slate-700'>{title}</Typography>
      <Divider className='my-0.5 h-0.5 w-[20%] rounded bg-[#0228A0]' />
    </Grid>
    <Typography className='text-3xl text-[#031F72]'>{value}</Typography>
  </Grid>
);

export default KpiTiles;
