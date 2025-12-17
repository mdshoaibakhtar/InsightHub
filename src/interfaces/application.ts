export interface IApplication {
  id: string;
  accountName: string;
  applicationNumber: string;
  applicationStatus: string;
  partnerInstaller: string;
  installationAddress: string;
  installationState: string;
  assignee: string;
  queueId: string;
  slaDueDate: number;
  reReviewQueue: boolean;
  safeHarbor: boolean;
  dca: boolean;
  applicationType: string;
}

export interface IQueue {
  id: string;
  label: string;
  value: string;
  group: string;
  filterCriteria?: object;
}

export interface IAgent {
  id: string;
  name: string;
  color: string;
}

export interface IApplicationTableProps {
  isLoading: boolean;
  applications: IApplication[];
  agentData: IAgent[];
  fetchApplicationList: () => void;
  noApplicationData: boolean;
}

export interface IFilterControlsProps {
  isLoading: boolean;
  selectedFilter: IQueue | null;
  queueData: IQueue[];
  selectedAgent: IAgent | undefined;
  agentData: IAgent[];
  searchQuery: string;
  onFilterChange: (filter: IQueue) => void;
  onAgentChange: (agent: IAgent) => void;
  onSearchChange: (query: string) => void;
  onRefresh: () => void;
  isApplicationLoading: boolean;
}

export interface ILastIndex {
  queue: string;
  application_id: string;
}

export interface IToolTipProps {
  children: React.ReactNode;
  tooltipText: string | number;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
export interface ISideDrawerInterface {
  showDrawer: boolean;
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  headerText?: string;
  body?: React.ReactNode;
  drawerSide?: string;
  width?: string | 'md';
}
