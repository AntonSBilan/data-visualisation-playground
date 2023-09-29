export const chartistLineChart = `
new Chartist.Line('body', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});
`;
