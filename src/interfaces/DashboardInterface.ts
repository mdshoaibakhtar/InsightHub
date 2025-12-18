import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { IChartData } from "./Chart";

export interface IOverViewCardInterface {
  icon: IconProp;
  title: string;
  value: number | string;
  isPercentage?: boolean;
}

export interface IAgentDashboardData {
  totalReviewsCompleted: number;
  last30DaysReviewsCompleted: number;
  slaTurnaround: number;
  last30DaysSlaTurnaround: number;
  medianAccuracyScore: number;
  last30DaysMedianAccuracyScore: number;
  lastAssessment: { [key: string]: string };
  lastAssessmentAccuracyScore: number;
  reviewVsQueue: IChartData;
  todaysActivity: { [key: string]: string };
  qualifiedQueues: string[];
  reviewsWithinSLA: number;
}

export interface INextReviewActionProps {
  todaysActivity: { [key: string]: string };
}

export interface IDropdownOption {
  id: string;
  label: string;
}

export interface IDropdownMenuProps {
  options: IDropdownOption[];
  selectedOption: IDropdownOption;
  onSelect: (option: IDropdownOption) => void;
  placeholder?: string;
  width?: string;
  height?: string;
  placement?: 'bottom left' | 'bottom right' | 'top left' | 'top right';
  value: number | string | undefined;
  isPercentage?: boolean;
  borderRadius?: string;
}

export interface ISlaPerformanceInterface {
  totalApplications: number;
  last30DaysApplications: number;
  totalReviews: number;
  last30DaysReviews: number;
  slaTurnaround: number;
  last30daysSlaTurnaround: number;
  medianAccuracyScore: number;
  last30daysMedianAccuracyScore: number;
}

export interface IDashboardProps {
  totalTodos: number;
  totalTodosWithAssignee: number;
  totalReReviews: number;
  mostAgedApplicationUnassigned: IMostAgedApplicationsInterface;
  mostAgedApplicationAssigned: IMostAgedApplicationsInterface;
  leadingAgents: [];
  reviewHistoryByQueueGraph: IChartData;
  activeQueueGraph: IChartData;
  slaPerformance: ISlaPerformanceInterface;
}

export interface IDashboardData {
  dashboardData?: IDashboardProps;
}

export interface IMostAgedApplicationsInterface {
  application_id: string;
  application_name: string;
  assigned_to: string | null;
  queues: string[];
  sla_days_remaining: number | undefined;
}
