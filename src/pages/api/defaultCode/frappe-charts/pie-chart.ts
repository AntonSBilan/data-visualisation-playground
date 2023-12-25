export const frappeChartsPieChart = `
var data = [{"name":"<5","value":19912018},{"name":"5-9","value":20501982},{"name":"10-14","value":20679786},{"name":"15-19","value":21354481},{"name":"20-24","value":22604232},{"name":"25-29","value":21698010},{"name":"30-34","value":21183639},{"name":"35-39","value":19855782},{"name":"40-44","value":20796128},{"name":"45-49","value":21370368},{"name":"50-54","value":22525490},{"name":"55-59","value":21001947},{"name":"60-64","value":18415681},{"name":"65-69","value":14547446},{"name":"70-74","value":10587721},{"name":"75-79","value":7730129},{"name":"80-84","value":5811429},{"name":"≥85","value":5938752}];

data = {
    labels: data.map(d => d.name),
    datasets: [
        {
            name: "Peaple by Age", chartType: "pie",
            values: data.map(d => d.value)
        }
    ]
}

const chart = new frappe.Chart("body", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    title: "My Awesome Chart",
    data: data,
    type: 'pie',
    animate: false,
    height: window.innerHeight - 100,
    colors: ['#7cd6fd', '#743ee2']
})
`;
