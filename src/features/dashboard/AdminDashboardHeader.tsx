import { Divider, Grid } from "@mui/material";
import KpiTiles from "./KpiTiles";

const AdminDashboardHeader = () => (
  <Grid direction={'column'} className='flex flex-row w-full px-10 justify-between gap-4 items-center'>
    {/* KPI Summary Tiles */}
    <KpiTiles title={'Total Applications'} value={1200} />
    <Divider className='m-0.5 mx-4 h-[80%]' orientation='vertical' />
    <KpiTiles title={'Approve Applications'} value={600} />
    <Divider className='m-0.5 mx-4 h-[80%]' orientation='vertical' />
    <KpiTiles title={'Rejected Applications'} value={200} />
    <Divider className='m-0.5 mx-4 h-[80%]' orientation='vertical' />
    <KpiTiles title={'Pending Applications'} value={400} />
  </Grid>
);

export default AdminDashboardHeader;
