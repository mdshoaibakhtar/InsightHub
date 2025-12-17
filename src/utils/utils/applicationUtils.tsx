import type { IAgent } from "../../interfaces/application";

// Get color for assignee avatar
export const getAssigneeColor = (userId: string, userMap: Map<string, IAgent>): string => {
  const user = userMap.get(userId);
  return user?.color || 'bg-gray-600';
};

// Format cognito user status
export const formatUserStatus = (status: string) => {
  switch (status) {
    case 'CONFIRMED':
      return 'Confirmed';
    case 'FORCE_CHANGE_PASSWORD':
      return 'Password Change Required';
    case 'RESET_REQUIRED':
      return 'Reset Required';
    default:
      return status;
  }
};
