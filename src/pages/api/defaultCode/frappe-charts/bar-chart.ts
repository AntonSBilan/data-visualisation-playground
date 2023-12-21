export const frappeChartsBarChart = `
var data = [{"letter":"A","frequency":0.08167},{"letter":"B","frequency":0.01492},{"letter":"C","frequency":0.02782},{"letter":"D","frequency":0.04253},{"letter":"E","frequency":0.12702},{"letter":"F","frequency":0.02288},{"letter":"G","frequency":0.02015},{"letter":"H","frequency":0.06094},{"letter":"I","frequency":0.06966},{"letter":"J","frequency":0.00153},{"letter":"K","frequency":0.00772},{"letter":"L","frequency":0.04025},{"letter":"M","frequency":0.02406},{"letter":"N","frequency":0.06749},{"letter":"O","frequency":0.07507},{"letter":"P","frequency":0.01929},{"letter":"Q","frequency":0.00095},{"letter":"R","frequency":0.05987},{"letter":"S","frequency":0.06327},{"letter":"T","frequency":0.09056},{"letter":"U","frequency":0.02758},{"letter":"V","frequency":0.00978},{"letter":"W","frequency":0.0236},{"letter":"X","frequency":0.0015},{"letter":"Y","frequency":0.01974},{"letter":"Z","frequency":0.00074}];

data = {
    labels: data.sort((a, b) => b.frequency - a.frequency).map(d => d.letter),
    datasets: [
        {
            name: "Letter Freaquency", chartType: "bar",
            values: data.sort((a, b) => b.frequency - a.frequency).map(d => d.frequency * 100)
        }
    ]
}

const chart = new frappe.Chart("body", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    title: "Letter Freaquency",
    data: data,
    type: 'bar',
    height: window.innerHeight - 100,
    colors: ['#7cd6fd', '#743ee2']
})
`;
