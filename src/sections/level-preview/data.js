const backgroundColor = ['#41C833', '#A595FF', '#6BBCE2', '#FFB56A', '#C84594'];

export const data = {
  labels: ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'],
  datasets: [
    {
      label: '1',
      data: [1, 4, 7, 10, 13],
      backgroundColor,
      borderRadius: 10,
      borderSkipped: false,
      categoryPercentage: 1,
      barPercentage: 0.8,
      barStrokeWidth: 0,
    },
    {
      label: '2',
      data: [2, 5, 8, 11, 14],
      backgroundColor,
      borderRadius: 10,
      borderSkipped: false,
      categoryPercentage: 1,
      barPercentage: 0.8,
      barStrokeWidth: 0,
    },
    {
      label: '3',
      data: [3, 6, 9, 12, 15],
      backgroundColor,
      borderRadius: 10,
      borderSkipped: false,
      categoryPercentage: 1,
      barPercentage: 0.8,
      barStrokeWidth: 0,
    },
  ],
};
