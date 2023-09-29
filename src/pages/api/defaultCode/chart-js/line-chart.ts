export const chartJsLineChart = `
const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
document.body.append(canvas);

const ctx = document.getElementById('canvas');

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

new Chart(ctx, {
  type: 'line',
  data: data,
});

`;
