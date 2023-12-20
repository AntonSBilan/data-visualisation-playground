export const echartsBarChart = `
// Initialize the echarts instance based on the prepared dom
const el = document.createElement('div');
el.setAttribute('id', 'main');
el.setAttribute('style', 'width: 90vw;height:90vh;');
document.body.append(el);
var myChart = echarts.init(document.getElementById('main'));

// Specify the configuration items and data for the chart
var option = {
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  legend: {
    data: ['sales']
  },
  xAxis: {
    data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
`;
