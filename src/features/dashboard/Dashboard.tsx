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
import { ensureChartData, handleGraphColors } from '../../utils/utils/styleUtils';
import type { IAgentsTable } from '../../interfaces/agents';
import type { IDashboardProps, IDropdownOption } from '../../interfaces/DashboardInterface';
import RTManagerDashboardSkeleton from '../../shared/skeleton/rtManagerDashboard/RTManagerDashboardSkeleton';
import AdminDashboardHeader from './AdminDashboardHeader';
import BarCharts from '../../shared/charts/BarCharts';
import OverviewCard from './OverviewCard';
import NoDataFoundSecondary from '../../shared/noDataFound/NoDataFoundSecondary';
import PieChart from '../../shared/charts/PieChart';
import { pieChartData, reviewHistoryByQueueGraph, reviewHistoryByQueueGraphForAgent } from '../../mockdata/Dashboard';

export interface IRTManagerInterfaceProps {
  agentAPIList: IAgentsTable[];
}
// Admin dashboard
const AdminDashboard = ({ agentAPIList }: IRTManagerInterfaceProps) => {
  const [dashboardSkeleton, setDashboardSkeleton] = useState(true);
  const [dashboardData, setDashboardData] = useState<IDashboardProps | undefined>();
  const [leadingAgents, setLeadingAgents] = useState<string[]>([]);
  // Fetching initial list of agents under that orgs
  const prepareAgentListForPicker = () => {
    const arr: IDropdownOption[] = [];
    agentAPIList.map((each: IAgentsTable) => {
      arr.push({
        label: each['name'],
        id: each['id'],
      });
    });
  };

  const updateListOfLeadingAgents = (listOfLeadingAgentSubs: string[]) => {
    const arr: string[] = [];
    agentAPIList.map((each: IAgentsTable) => {
      listOfLeadingAgentSubs.map((eachSubs: string) => {
        if (eachSubs === each['id']) {
          arr.push(each?.['name']);
        }
      });
    });
    setLeadingAgents(arr);
  };
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

  // useEffect(() => {
  //   prepareAgentListForPicker();
  //   if (dashboardData?.leadingAgents && agentAPIList) {
  //     updateListOfLeadingAgents(dashboardData?.leadingAgents);
  //   }
  // }, [agentAPIList, dashboardData?.leadingAgents]);

  const getPichartData = (pendingReviews?: number | null, completedReviews?: number | null) => {
    const data: {
      label: string;
      value: number;
      color: string;
      cutout: string;
    }[] = [];

    if (pendingReviews && pendingReviews > 0) {
      data.push({
        label: 'Pending Reviews',
        value: pendingReviews,
        color: '#031F72',
        cutout: '',
      });
    }

    if (completedReviews && completedReviews > 0) {
      data.push({
        label: 'Completed Reviews',
        value: completedReviews,
        color: '#DE2427',
        cutout: '',
      });
    }

    return data;
  };

  if (dashboardSkeleton) {
    return <RTManagerDashboardSkeleton />;
  }

  return (
      <Box className='items-center justify-between flex flex-col gap-4 h-full w-[100%]'>
        <Box className='flex flex-row bg-white shadow-xl rounded-xl py-4 px-4 w-full justify-between gap-2 border'>
          <AdminDashboardHeader />
        </Box>
        <Box className='flex flex-row bg-white shadow-xl rounded-xl w-[100%] justify-between gap-10 border p-4'>
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
                  value={
                    dashboardData?.slaPerformance?.totalApplications
                      ? dashboardData?.slaPerformance?.totalApplications
                      : 0
                  }
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'Total Reviews'}
                  icon={faChartLine}
                  value={
                    dashboardData?.slaPerformance?.totalReviews
                      ? dashboardData?.slaPerformance?.totalReviews
                      : 0
                  }
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'SLA Turnaround Rate'}
                  icon={faClock}
                  value={
                    dashboardData?.slaPerformance?.slaTurnaround
                      ? dashboardData?.slaPerformance?.slaTurnaround
                      : 0
                  }
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'Median Accuracy Score'}
                  icon={faAward}
                  value={
                    dashboardData?.slaPerformance?.medianAccuracyScore
                      ? dashboardData?.slaPerformance?.medianAccuracyScore
                      : 0
                  }
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
              </Box>
              <Box className='w-full flex flex-row'>
                <OverviewCard
                  title={'T30D Applications'}
                  icon={faCalendarDays}
                  value={
                    dashboardData?.slaPerformance?.last30DaysApplications
                      ? dashboardData?.slaPerformance?.last30DaysApplications
                      : 0
                  }
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'T30D Reviews'}
                  icon={faStopwatch}
                  value={
                    dashboardData?.slaPerformance?.last30DaysReviews
                      ? dashboardData?.slaPerformance?.last30DaysReviews
                      : 0
                  }
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'T30D SLA Turnaround'}
                  icon={faTurnUp}
                  value={
                    dashboardData?.slaPerformance?.last30daysSlaTurnaround
                      ? dashboardData?.slaPerformance?.last30daysSlaTurnaround
                      : 0
                  }
                  isPercentage
                />
                <Divider className='m-0.5' orientation='vertical' />
                <OverviewCard
                  title={'T30D Median Accuracy'}
                  icon={faTrophy}
                  value={
                    dashboardData?.slaPerformance?.last30daysMedianAccuracyScore
                      ? dashboardData?.slaPerformance?.last30daysMedianAccuracyScore
                      : 0
                  }
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