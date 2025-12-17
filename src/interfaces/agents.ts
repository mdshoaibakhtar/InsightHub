import { LucideIcon } from 'lucide-react-native';

export interface IAgentItem {
  id: string;
  name: string;
  color: string;
}

export interface IAgentsTable {
  id: string;
  email: string;
  name: string;
  status: string;
  preferred_queues: string[];
  active: boolean;
}

export interface IAgentListTableProps {
  isLoading: boolean;
  noAgentData: boolean;
  agentData: IAgentsTable[];
  onRefresh: () => void;
  setIsAgentStillLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAgentSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onRefresh: () => void;
  isAgentStillLoading: boolean;
  buttonLabel?: string;
  title?: string;
}

export interface IFilteredAgentList {
  name: string;
  email: string;
}

export interface IMenuItem {
  key: string;
  label: string;
  icon: LucideIcon;
  onPress: () => void;
}

export interface IAgentMenuProps {
  menuItems: IMenuItem[];
}

export interface IItemInterfaceProps {
  label: string;
  value: string;
}

export interface IItempInterface {
  data: IItemInterfaceProps[];
}

export interface IItempInterfaces {
  query_result: IItempInterface;
}

export interface IAgentListLastIndex {
  cognito_sub: string;
  organisation_id: string;
}
export interface IEachAgentItemInterface {
  label: string;
  value: string;
}

export interface IEachAgentItemState {
  options: IEachAgentItemInterface[];
  selected: IEachAgentItemInterface[];
  preferredQueues: string[];
  agentList: IAgentsTable[];
  isAgentListLoading: boolean;
  isAgentListLastIndex: IAgentListLastIndex;
  isAgentNoDataFound: boolean;
}

export interface IMultiSelectDropDownProps {
  isLoading: boolean;
  hasError: boolean;
  options: IEachAgentItemInterface[];
}
export interface ILabelAvatarGroupProps {
  labels: string[];
  size?: 'small' | 'medium' | 'big';
  maxVisible?: number;
}
export interface IToastInterface {
  message: string;
  variant: string;
}

export interface IAgentCreateFormInterface {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  onRefresh: () => void;
  setToastData: React.Dispatch<React.SetStateAction<IToastInterface | undefined>>;
}

export interface IInvokeFetchAgentListApiInterface {
  fetchAgentList: () => void;
}

export interface IQueueTable {
  id: string;
  name: string;
  organization: string;
  queues: string[];
  conditionExpression: string;
}
