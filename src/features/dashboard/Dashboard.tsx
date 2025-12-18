import {
  faAward,
  faCalendarDays,
  faChartLine,
  faClipboardCheck,
  faClock,
  faStopwatch,
  faTrophy,
  faTurnUp,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import type { IAgentsTable } from '../../interfaces/agents';
import RTManagerDashboardSkeleton from '../../shared/skeleton/rtManagerDashboard/RTManagerDashboardSkeleton';
import AdminDashboardHeader from './AdminDashboardHeader';
import BarCharts from '../../shared/charts/BarCharts';
import OverviewCard from './OverviewCard';
import NoDataFoundSecondary from '../../shared/noDataFound/NoDataFoundSecondary';
import PieChart from '../../shared/charts/PieChart';
import { pieChartData, reviewHistoryByQueueGraph, reviewHistoryByQueueGraphForAgent } from '../../mockdata/Dashboard';

export interface IRTManagerInterfaceProps {
  agentAPIList?: IAgentsTable[];
}
// Admin dashboard
const AdminDashboard = () => {
  const [dashboardSkeleton, setDashboardSkeleton] = useState(true);
  // API Call to fetch the dashboard data : /internal/dashboard
  const fetchDashboardData = async () => {
    setDashboardSkeleton(true);
    try {
      // const [dashboardAPIResponse] = await Promise.all([userService.fetchRTManagerDashboardData()]);
      // if (dashboardAPIResponse?.success) {
      //   const data: IDashboardProps = dashboardAPIResponse?.data?.query_result ?? [];
      //   setDashboardData(data);
      //   setDashboardSkeleton(false);
      // }
    } catch {
      // toastService.error(t('Application.fetch_data_error'));
      setDashboardSkeleton(false);
    } finally {
      setDashboardSkeleton(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  if (dashboardSkeleton) {
    return <RTManagerDashboardSkeleton />;
  }

  return (
      <Box className='items-center justify-between flex flex-col gap-4 h-full w-[100%]'>
        <Box className='flex flex-row bg-white shadow-xl rounded-xl py-4 px-4 w-full justify-between gap-2 border'>
          <AdminDashboardHeader />
        </Box>
        <Box className='flex flex-row bg-white shadow-xl rounded-xl w-[100%] justify-between gap-10 border p-4 overflow-hidden'>
          <BarCharts
            title={'Total Monthly Applications'}
            data={reviewHistoryByQueueGraph}
            datasets={[]}
            labels={[]}
          />
          <BarCharts
            title='Monthly Approved/rejected Applications'
            data={reviewHistoryByQueueGraphForAgent}
            datasets={[]}
            labels={[]}
          />
        </Box>
        <Box className='flex flex-col bg-white shadow-xl rounded-xl p-2 w-full gap-2 border'>
          <Box className='w-full flex flex-col justify-between p-4'>
              <Typography className='text-[#0228A0] text-xl'>Milestone Review SLA Performance</Typography>
              <Divider className='my-0.5 h-0.5 w-[10%] rounded bg-[#0228A0]' />
            </Box>
          <Box className='flex flex-row gap-4 w-full'>
            <Box className='flex flex-col w-[80%]'>
              <Box className='w-full flex flex-row'>
                <OverviewCard
                  title={'Total Applications'}
                  icon={faClipboardCheck}
                  value={235}
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'Total Reviews'}
                  icon={faChartLine}
                  value={634}
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'SLA Turnaround Rate'}
                  icon={faClock}
                  value={53}
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'Median Accuracy Score'}
                  icon={faAward}
                  value={33}
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
              </Box>
              <Box className='w-full flex flex-row'>
                <OverviewCard
                  title={'T30D Applications'}
                  icon={faCalendarDays}
                  value={54}
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'T30D Reviews'}
                  icon={faStopwatch}
                  value={787}
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'T30D SLA Turnaround'}
                  icon={faTurnUp}
                  value={78}
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'T30D Median Accuracy'}
                  icon={faTrophy}
                  value={27}
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
              </Box>
            </Box>
            <Box className='h-fit w-[20%]'>
              {pieChartData ? (
                <PieChart
                  data={pieChartData}
                  size={16}
                />
              ) : (
                <Box className='h-full justify-center'>
                  <NoDataFoundSecondary />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
  );
};

export default AdminDashboard;