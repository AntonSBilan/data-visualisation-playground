export const chartJsPieChart = `
const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
document.body.append(canvas);

const ctx = document.getElementById('canvas');

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

new Chart(ctx, {
  type: 'pie',
  data: data,
});

`;
