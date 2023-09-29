export const echartsLineChart = `
// Initialize the echarts instance based on the prepared dom
const el = document.createElement('div');
el.setAttribute('id', 'main');
el.setAttribute('style', 'width: 600px;height:400px;');
document.body.append(el);
const myChart = echarts.init(document.getElementById('main'));

const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};

myChart.setOption(option);

`;
