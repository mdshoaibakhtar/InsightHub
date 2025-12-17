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
    <Box style={{ flex: 1 }}
    >
        <Box className='items-center justify-between gap-4'>
          {/* <Announcement /> */}
          <Box className='flex flex-row bg-white shadow-xl rounded-xl py-4 px-4 w-full h-[22vh] justify-between gap-10'>
            <AdminDashboardHeader />
          </Box>
          <Box className='flex flex-row bg-white shadow-xl rounded-xl p-4 px-8 w-full h-[35vh] justify-between gap-10'>
            <BarCharts
              title={'Total Monthly Applications'}
              data={handleGraphColors(
                ensureChartData(dashboardData?.reviewHistoryByQueueGraph),
                false
              )}
              datasets={[]}
              labels={[]}
            />
            <BarCharts
              title='Monthly Approved/rejected Applications'
              data={handleGraphColors(ensureChartData(dashboardData?.activeQueueGraph), true)}
              datasets={[]}
              labels={[]}
            />
          </Box>
          <Box className='flex flex-col bg-white shadow-xl rounded-xl p-4 w-full h-[26vh] gap-3'>
            <Box className='w-full flex flex-row justify-between px-4'>
              <Box>
                <Typography className='text-[#0228A0] text-xl'>Milestone Review SLA Performance</Typography>
                <Divider className='my-0.5 h-0.5 w-[60%] rounded bg-[#0228A0]' />
              </Box>
            </Box>
            <Box className='flex flex-row gap-4'>
              <Box className='w-[75vw] flex flex-col'>
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
                    title={'T30D SLA Turnaround Rate'}
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
                    title={'T30D Median Accuracy Score'}
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
              <Box className='w-[20vw]'>
                {dashboardData?.totalTodos || dashboardData?.slaPerformance?.totalReviews ? (
                  <PieChart
                    data={getPichartData(
                      dashboardData?.totalTodos,
                      dashboardData?.slaPerformance?.totalReviews
                    )}
                    size={20}
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
    </Box>
  );
};

export default AdminDashboard;