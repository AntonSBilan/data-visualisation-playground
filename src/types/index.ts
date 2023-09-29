
export enum VisualisationTypeEnum {
  BAR_CHART  = 'BAR_CHART',
  PIE_CHART  = 'PIE_CHART',
  LINE_CHART = 'LINE_CHART',
  SCATTER_PLOT = 'SCATTER_PLOT',
}
export enum LibraryEnum {
  D3 = 'D3',
  CHART_JS = 'CHART_JS',
  VEGA_LITE = 'VEGA_LITE',
  CHARTIST = 'CHARTIST',
  ECHARTS = 'ECHARTS',
  APEX_CHARTS = 'APEX_CHARTS',
  FRAPPE_CHARTS = 'FRAPPE_CHARTS',
}

const chartNames: Record<VisualisationTypeEnum, string> = {
  BAR_CHART: 'Bar Chart',
  PIE_CHART: 'Pie Chart',
  LINE_CHART: 'Line Chart',
  SCATTER_PLOT: 'Scatter Plot',
};

export const supportedLibraries = [{
  type: LibraryEnum.D3,
  name: 'D3.js',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }, {
    type: VisualisationTypeEnum.SCATTER_PLOT,
    name: chartNames[VisualisationTypeEnum.SCATTER_PLOT]
  }]
}, {
  type: LibraryEnum.CHART_JS,
  name: 'Chart.js',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }, {
    type: VisualisationTypeEnum.SCATTER_PLOT,
    name: chartNames[VisualisationTypeEnum.SCATTER_PLOT]
  }]
}, {
  type: LibraryEnum.VEGA_LITE,
  name: 'Vega-Lite',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }, {
    type: VisualisationTypeEnum.SCATTER_PLOT,
    name: chartNames[VisualisationTypeEnum.SCATTER_PLOT]
  }]
}, {
  type: LibraryEnum.CHARTIST,
  name: 'Chartist.js',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }, {
    type: VisualisationTypeEnum.SCATTER_PLOT,
    name: chartNames[VisualisationTypeEnum.SCATTER_PLOT]
  }]
}, {
  type: LibraryEnum.ECHARTS,
  name: 'ECHARTS',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }, {
    type: VisualisationTypeEnum.SCATTER_PLOT,
    name: chartNames[VisualisationTypeEnum.SCATTER_PLOT]
  }]
}, {
  type: LibraryEnum.APEX_CHARTS,
  name: 'Apex Charts',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }, {
    type: VisualisationTypeEnum.SCATTER_PLOT,
    name: chartNames[VisualisationTypeEnum.SCATTER_PLOT]
  }]
}, {
  type: LibraryEnum.FRAPPE_CHARTS,
  name: 'Frappe Charts',
  visualisations: [{
    type: VisualisationTypeEnum.BAR_CHART,
    name: chartNames[VisualisationTypeEnum.BAR_CHART]
  }, {
    type: VisualisationTypeEnum.PIE_CHART,
    name: chartNames[VisualisationTypeEnum.PIE_CHART]
  }, {
    type: VisualisationTypeEnum.LINE_CHART,
    name: chartNames[VisualisationTypeEnum.LINE_CHART]
  }]
}];
