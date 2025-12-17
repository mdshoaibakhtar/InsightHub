
export const reviewHistoryByQueueGraph = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Queue 1',
      data: [65, 59, 30, 81, 56, 55, 40, 81, 56, 55, 40, 93],
      backgroundColor: '#031F72',
    },
    {
      label: 'Queue 2',
      data: [95, 59, 40, 59, 80, 81, 56, 55, 40, 81, 56, 15],
      backgroundColor: '#DE2427',
    },
  ],
};

export const reviewHistoryByQueueGraphForAgent = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Queue 1',
      data: [23, 65, 23, 87, 37, 83, 93, 29, 83, 93, 40, 93],
      backgroundColor: '#031F72',
    },
    {
      label: 'Queue 2',
      data: [93, 72, 29, 93, 90, 28, 82, 84, 62, 94, 12, 15],
      backgroundColor: '#DE2427',
    },
  ],
};

export const activeQueueManagement = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Assigned to Agent',
      data: [65, 59, 30, 81, 56, 55, 40, 81, 56, 55, 40, 93],
      backgroundColor: '#031F72',
    },
    {
      label: 'Unassigned',
      data: [95, 59, 40, 59, 80, 81, 56, 55, 40, 81, 56, 15],
      backgroundColor: '#DE2427',
    },
  ],
};

export const pieChartData = [
  {
    label: 'Total Review', //To do queue
    value: 115,
    color: '#031F72',
    cutout: '',
  },
  {
    label: 'Within SLA', //Total Review
    value: 7,
    color: '#DE2427',
    cutout: '',
  },
];
