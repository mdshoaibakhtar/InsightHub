import type { IFileNode } from "../../interfaces/applicationDetails";

// Recursively collects all files from a milestone node
export const collectFilesFromMilestone = (milestone: IFileNode): IFileNode[] => {
  const allMilestoneFiles: IFileNode[] = [];

  const collectFiles = (nodes: IFileNode[]) => {
    nodes.forEach((child: IFileNode) => {
      if (child.type === 'file') {
        allMilestoneFiles.push(child);
      } else if (child.children) {
        collectFiles(child.children); //recursively call
      }
    });
  };

  // Calling collectFiles to get the all childeren files
  if (milestone.children) {
    collectFiles(milestone.children);
  }

  return allMilestoneFiles;
};
