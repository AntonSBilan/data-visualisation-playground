export const frappeChartsLineChart = `
const data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
        "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
    ],
    datasets: [
        {
            name: "Some Data", chartType: "line",
            values: [25, 40, 30, 35, 8, 52, 17, -4]
        }
    ]
}

const chart = new frappe.Chart("body", {  // or a DOM element,
                                            // new Chart() in case of ES6 module with above usage
    title: "My Awesome Chart",
    data: data,
    type: 'line',
    height: window.innerHeight - 100,
    colors: ['#7cd6fd', '#743ee2']
})
`;
