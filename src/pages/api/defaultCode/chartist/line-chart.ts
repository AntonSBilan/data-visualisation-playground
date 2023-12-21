export const chartistLineChart = `
var data = [{"date":"2007-04-23T00:00:00.000Z","close":93.24},{"date":"2007-04-24T00:00:00.000Z","close":95.35},{"date":"2007-04-25T00:00:00.000Z","close":98.84},{"date":"2007-04-26T00:00:00.000Z","close":99.92},{"date":"2007-04-29T00:00:00.000Z","close":99.8},{"date":"2007-05-01T00:00:00.000Z","close":99.47},{"date":"2007-05-02T00:00:00.000Z","close":100.39},{"date":"2007-05-03T00:00:00.000Z","close":100.4},{"date":"2007-05-04T00:00:00.000Z","close":100.81},{"date":"2007-05-07T00:00:00.000Z","close":103.92},{"date":"2007-05-08T00:00:00.000Z","close":105.06},{"date":"2007-05-09T00:00:00.000Z","close":106.88},{"date":"2007-05-09T00:00:00.000Z","close":107.34},{"date":"2007-05-10T00:00:00.000Z","close":108.74},{"date":"2007-05-13T00:00:00.000Z","close":109.36},{"date":"2007-05-14T00:00:00.000Z","close":107.52},{"date":"2007-05-15T00:00:00.000Z","close":107.34},{"date":"2007-05-16T00:00:00.000Z","close":109.44},{"date":"2007-05-17T00:00:00.000Z","close":110.02},{"date":"2007-05-20T00:00:00.000Z","close":111.98},{"date":"2007-05-21T00:00:00.000Z","close":113.54},{"date":"2007-05-22T00:00:00.000Z","close":112.89},{"date":"2007-05-23T00:00:00.000Z","close":110.69},{"date":"2007-05-24T00:00:00.000Z","close":113.62},{"date":"2007-05-28T00:00:00.000Z","close":114.35},{"date":"2007-05-29T00:00:00.000Z","close":118.77},{"date":"2007-05-30T00:00:00.000Z","close":121.19},{"date":"2007-06-01T00:00:00.000Z","close":118.4},{"date":"2007-06-04T00:00:00.000Z","close":121.33},{"date":"2007-06-05T00:00:00.000Z","close":122.67},{"date":"2007-06-06T00:00:00.000Z","close":123.64},{"date":"2007-06-07T00:00:00.000Z","close":124.07},{"date":"2007-06-08T00:00:00.000Z","close":124.49},{"date":"2007-06-10T00:00:00.000Z","close":120.19},{"date":"2007-06-11T00:00:00.000Z","close":120.38},{"date":"2007-06-12T00:00:00.000Z","close":117.5},{"date":"2007-06-13T00:00:00.000Z","close":118.75},{"date":"2007-06-14T00:00:00.000Z","close":120.5},{"date":"2007-06-17T00:00:00.000Z","close":125.09},{"date":"2007-06-18T00:00:00.000Z","close":123.66},{"date":"2007-06-19T00:00:00.000Z","close":121.55},{"date":"2007-06-20T00:00:00.000Z","close":123.9},{"date":"2007-06-21T00:00:00.000Z","close":123},{"date":"2007-06-24T00:00:00.000Z","close":122.34},{"date":"2007-06-25T00:00:00.000Z","close":119.65},{"date":"2007-06-26T00:00:00.000Z","close":121.89},{"date":"2007-06-27T00:00:00.000Z","close":120.56},{"date":"2007-06-28T00:00:00.000Z","close":122.04},{"date":"2007-07-02T00:00:00.000Z","close":121.26},{"date":"2007-07-03T00:00:00.000Z","close":127.17},{"date":"2007-07-05T00:00:00.000Z","close":132.75},{"date":"2007-07-06T00:00:00.000Z","close":132.3},{"date":"2007-07-09T00:00:00.000Z","close":130.33},{"date":"2007-07-09T00:00:00.000Z","close":132.35},{"date":"2007-07-10T00:00:00.000Z","close":132.39},{"date":"2007-07-11T00:00:00.000Z","close":134.07},{"date":"2007-07-12T00:00:00.000Z","close":137.73},{"date":"2007-07-15T00:00:00.000Z","close":138.1},{"date":"2007-07-16T00:00:00.000Z","close":138.91},{"date":"2007-07-17T00:00:00.000Z","close":138.12},{"date":"2007-07-18T00:00:00.000Z","close":140},{"date":"2007-07-19T00:00:00.000Z","close":143.75},{"date":"2007-07-22T00:00:00.000Z","close":143.7},{"date":"2007-07-23T00:00:00.000Z","close":134.89},{"date":"2007-07-24T00:00:00.000Z","close":137.26},{"date":"2007-07-25T00:00:00.000Z","close":146},{"date":"2007-07-26T00:00:00.000Z","close":143.85},{"date":"2007-07-29T00:00:00.000Z","close":141.43},{"date":"2007-07-30T00:00:00.000Z","close":131.76},{"date":"2007-08-01T00:00:00.000Z","close":135},{"date":"2007-08-02T00:00:00.000Z","close":136.49},{"date":"2007-08-03T00:00:00.000Z","close":131.85},{"date":"2007-08-06T00:00:00.000Z","close":135.25},{"date":"2007-08-07T00:00:00.000Z","close":135.03},{"date":"2007-08-08T00:00:00.000Z","close":134.01},{"date":"2007-08-09T00:00:00.000Z","close":126.39},{"date":"2007-08-09T00:00:00.000Z","close":125},{"date":"2007-08-12T00:00:00.000Z","close":127.79},{"date":"2007-08-13T00:00:00.000Z","close":124.03},{"date":"2007-08-14T00:00:00.000Z","close":119.9},{"date":"2007-08-15T00:00:00.000Z","close":117.05},{"date":"2007-08-16T00:00:00.000Z","close":122.06},{"date":"2007-08-19T00:00:00.000Z","close":122.22},{"date":"2007-08-20T00:00:00.000Z","close":127.57},{"date":"2007-08-21T00:00:00.000Z","close":132.51},{"date":"2007-08-22T00:00:00.000Z","close":131.07},{"date":"2007-08-23T00:00:00.000Z","close":135.3},{"date":"2007-08-26T00:00:00.000Z","close":132.25},{"date":"2007-08-27T00:00:00.000Z","close":126.82},{"date":"2007-08-28T00:00:00.000Z","close":134.08},{"date":"2007-08-29T00:00:00.000Z","close":136.25},{"date":"2007-08-30T00:00:00.000Z","close":138.48},{"date":"2007-09-04T00:00:00.000Z","close":144.16},{"date":"2007-09-05T00:00:00.000Z","close":136.76},{"date":"2007-09-06T00:00:00.000Z","close":135.01},{"date":"2007-09-07T00:00:00.000Z","close":131.77},{"date":"2007-09-09T00:00:00.000Z","close":136.71},{"date":"2007-09-10T00:00:00.000Z","close":135.49},{"date":"2007-09-11T00:00:00.000Z","close":136.85},{"date":"2007-09-12T00:00:00.000Z","close":137.2},{"date":"2007-09-13T00:00:00.000Z","close":138.81},{"date":"2007-09-16T00:00:00.000Z","close":138.41},{"date":"2007-09-17T00:00:00.000Z","close":140.92},{"date":"2007-09-18T00:00:00.000Z","close":140.77},{"date":"2007-09-19T00:00:00.000Z","close":140.31},{"date":"2007-09-20T00:00:00.000Z","close":144.15},{"date":"2007-09-23T00:00:00.000Z","close":148.28},{"date":"2007-09-24T00:00:00.000Z","close":153.18},{"date":"2007-09-25T00:00:00.000Z","close":152.77},{"date":"2007-09-26T00:00:00.000Z","close":154.5},{"date":"2007-09-27T00:00:00.000Z","close":153.47},{"date":"2007-10-01T00:00:00.000Z","close":156.34},{"date":"2007-10-02T00:00:00.000Z","close":158.45},{"date":"2007-10-03T00:00:00.000Z","close":157.92},{"date":"2007-10-04T00:00:00.000Z","close":156.24},{"date":"2007-10-05T00:00:00.000Z","close":161.45},{"date":"2007-10-08T00:00:00.000Z","close":167.91},{"date":"2007-10-09T00:00:00.000Z","close":167.86},{"date":"2007-10-09T00:00:00.000Z","close":166.79},{"date":"2007-10-10T00:00:00.000Z","close":162.23},{"date":"2007-10-11T00:00:00.000Z","close":167.25},{"date":"2007-10-14T00:00:00.000Z","close":166.98},{"date":"2007-10-15T00:00:00.000Z","close":169.58},{"date":"2007-10-16T00:00:00.000Z","close":172.75},{"date":"2007-10-17T00:00:00.000Z","close":173.5},{"date":"2007-10-18T00:00:00.000Z","close":170.42},{"date":"2007-10-21T00:00:00.000Z","close":174.36},{"date":"2007-10-22T00:00:00.000Z","close":186.16},{"date":"2007-10-23T00:00:00.000Z","close":185.93},{"date":"2007-10-24T00:00:00.000Z","close":182.78},{"date":"2007-10-25T00:00:00.000Z","close":184.7},{"date":"2007-10-28T00:00:00.000Z","close":185.09},{"date":"2007-10-29T00:00:00.000Z","close":187},{"date":"2007-10-30T00:00:00.000Z","close":189.95},{"date":"2007-11-01T00:00:00.000Z","close":187.44},{"date":"2007-11-02T00:00:00.000Z","close":187.87},{"date":"2007-11-05T00:00:00.000Z","close":186.18},{"date":"2007-11-06T00:00:00.000Z","close":191.79},{"date":"2007-11-07T00:00:00.000Z","close":186.3},{"date":"2007-11-08T00:00:00.000Z","close":175.47},{"date":"2007-11-09T00:00:00.000Z","close":165.37},{"date":"2007-11-11T00:00:00.000Z","close":153.76},{"date":"2007-11-12T00:00:00.000Z","close":169.96},{"date":"2007-11-13T00:00:00.000Z","close":166.11},{"date":"2007-11-14T00:00:00.000Z","close":164.3},{"date":"2007-11-15T00:00:00.000Z","close":166.39},{"date":"2007-11-18T00:00:00.000Z","close":163.95},{"date":"2007-11-19T00:00:00.000Z","close":168.85},{"date":"2007-11-20T00:00:00.000Z","close":168.46},{"date":"2007-11-22T00:00:00.000Z","close":171.54},{"date":"2007-11-25T00:00:00.000Z","close":172.54},{"date":"2007-11-26T00:00:00.000Z","close":174.81},{"date":"2007-11-27T00:00:00.000Z","close":180.22},{"date":"2007-11-28T00:00:00.000Z","close":184.29},{"date":"2007-11-29T00:00:00.000Z","close":182.22},{"date":"2007-12-03T00:00:00.000Z","close":178.86},{"date":"2007-12-04T00:00:00.000Z","close":179.81},{"date":"2007-12-05T00:00:00.000Z","close":185.5},{"date":"2007-12-06T00:00:00.000Z","close":189.95},{"date":"2007-12-07T00:00:00.000Z","close":194.3},{"date":"2007-12-09T00:00:00.000Z","close":194.21},{"date":"2007-12-10T00:00:00.000Z","close":188.54},{"date":"2007-12-11T00:00:00.000Z","close":190.86},{"date":"2007-12-12T00:00:00.000Z","close":191.83},{"date":"2007-12-13T00:00:00.000Z","close":190.39},{"date":"2007-12-16T00:00:00.000Z","close":184.4},{"date":"2007-12-17T00:00:00.000Z","close":182.98},{"date":"2007-12-18T00:00:00.000Z","close":183.12},{"date":"2007-12-19T00:00:00.000Z","close":187.21},{"date":"2007-12-20T00:00:00.000Z","close":193.91},{"date":"2007-12-23T00:00:00.000Z","close":198.8},{"date":"2007-12-25T00:00:00.000Z","close":198.95},{"date":"2007-12-26T00:00:00.000Z","close":198.57},{"date":"2007-12-27T00:00:00.000Z","close":199.83},{"date":"2007-12-30T00:00:00.000Z","close":198.08},{"date":"2008-01-02T00:00:00.000Z","close":194.84},{"date":"2008-01-03T00:00:00.000Z","close":194.93},{"date":"2008-01-04T00:00:00.000Z","close":180.05},{"date":"2008-01-07T00:00:00.000Z","close":177.64},{"date":"2008-01-08T00:00:00.000Z","close":171.25},{"date":"2008-01-09T00:00:00.000Z","close":179.4},{"date":"2008-01-09T00:00:00.000Z","close":178.02},{"date":"2008-01-10T00:00:00.000Z","close":172.69},{"date":"2008-01-13T00:00:00.000Z","close":178.78},{"date":"2008-01-14T00:00:00.000Z","close":169.04},{"date":"2008-01-15T00:00:00.000Z","close":159.64},{"date":"2008-01-16T00:00:00.000Z","close":160.89},{"date":"2008-01-17T00:00:00.000Z","close":161.36},{"date":"2008-01-21T00:00:00.000Z","close":155.64},{"date":"2008-01-22T00:00:00.000Z","close":139.07},{"date":"2008-01-23T00:00:00.000Z","close":135.6},{"date":"2008-01-24T00:00:00.000Z","close":130.01},{"date":"2008-01-27T00:00:00.000Z","close":130.01},{"date":"2008-01-28T00:00:00.000Z","close":131.54},{"date":"2008-01-29T00:00:00.000Z","close":132.18},{"date":"2008-01-30T00:00:00.000Z","close":135.36},{"date":"2008-02-01T00:00:00.000Z","close":133.75},{"date":"2008-02-04T00:00:00.000Z","close":131.65},{"date":"2008-02-05T00:00:00.000Z","close":129.36},{"date":"2008-02-06T00:00:00.000Z","close":122},{"date":"2008-02-07T00:00:00.000Z","close":121.24},{"date":"2008-02-08T00:00:00.000Z","close":125.48},{"date":"2008-02-10T00:00:00.000Z","close":129.45},{"date":"2008-02-11T00:00:00.000Z","close":124.86},{"date":"2008-02-12T00:00:00.000Z","close":129.4},{"date":"2008-02-13T00:00:00.000Z","close":127.46},{"date":"2008-02-14T00:00:00.000Z","close":124.63},{"date":"2008-02-18T00:00:00.000Z","close":122.18},{"date":"2008-02-19T00:00:00.000Z","close":123.82},{"date":"2008-02-20T00:00:00.000Z","close":121.54},{"date":"2008-02-21T00:00:00.000Z","close":119.46},{"date":"2008-02-24T00:00:00.000Z","close":119.74},{"date":"2008-02-25T00:00:00.000Z","close":119.15},{"date":"2008-02-26T00:00:00.000Z","close":122.96},{"date":"2008-02-27T00:00:00.000Z","close":129.91}];

data = data.map(d => ({x: new Date(d.date).getTime(), y: d.close}))

new Chartist.Line('body', {
    series: [data]
}, {
  axisX: {
    type: Chartist.AutoScaleAxis,
    labelInterpolationFnc: function(value) {
        return \`\${new Date(value).getMonth()}/\${new Date(value).getFullYear()}\`;
    },
    onlyInteger: true,
    scaleMinSpace: 20,
  },
});
`;
