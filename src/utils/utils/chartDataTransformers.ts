import type { IPieChartInterface } from "../../interfaces/Chart";

export const todaysActivity = (data: { [key: string]: string }): IPieChartInterface => {
  const result: IPieChartInterface = [];

  const reviewsCompleted = parseInt(data?.reviews_completed || '');
  if (reviewsCompleted > 0) {
    result.push({
      label: 'Review Completed',
      value: reviewsCompleted,
      color: '#031F72',
      cutout: '50%',
    });
  }

  const totalAssigned = parseInt(data?.total_assigned_applications || '');
  if (totalAssigned > 0) {
    result.push({
      label: 'Review Assigned',
      value: totalAssigned,
      color: '#DE2427',
      cutout: '50%',
    });
  }

  const reReviewCompleted = parseInt(data?.re_reviews_completed || '');
  if (reReviewCompleted > 0) {
    result.push({
      label: 'Re-review Completed',
      value: reReviewCompleted,
      color: '#245BDE',
      cutout: '50%',
    });
  }

  return result;
};

export const reviewsData = (
  reviewsWithinSLA: number | null | undefined,
  totalReviewsCompleted: number | null | undefined
): IPieChartInterface => {
  const result: IPieChartInterface = [];

  if (totalReviewsCompleted && totalReviewsCompleted > 0) {
    result.push({
      label: 'Total Review',
      value: totalReviewsCompleted,
      color: '#031F72',
      cutout: '50%',
    });
  }

  if (reviewsWithinSLA && reviewsWithinSLA > 0) {
    result.push({
      label: 'Within SLA',
      value: reviewsWithinSLA,
      color: '#DE2427',
      cutout: '50%',
    });
  }

  return result;
};
