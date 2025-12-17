import type { IFileNode } from "../../interfaces/applicationDetails";

// Checks if all document categories in active milestones are approved
export const checkAllDocumentCategoriesApproved = (
  applicationDocument?: IFileNode,
  updatedNodes: Record<string, string> = {}
): boolean => {
  const statusMap: Record<string, string> = {};

  applicationDocument?.children?.forEach((milestoneFolder: IFileNode) => {
    if (milestoneFolder.parent_category && milestoneFolder.active) {
      milestoneFolder.children?.forEach((docCategory: IFileNode) => {
        if (!docCategory.parent_category && docCategory.id) {
          statusMap[docCategory.id] = updatedNodes[docCategory.id] || docCategory.status || '';
        }
      });
    }
  });
  if (Object.keys(statusMap).length === 0) {
    return false;
  }
  // Return true if all document categories status 'APPROVED'
  return Object.values(statusMap).every((status) => status === 'APPROVED');
};
