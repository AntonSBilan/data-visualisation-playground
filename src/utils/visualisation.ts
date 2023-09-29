import {LibraryEnum, VisualisationTypeEnum} from '@/types';
import {d3BarChart} from '@/pages/api/defaultCode/d3/bar-chart';
import {barChartChartJs} from '@/pages/api/defaultCode/chart-js/bar-chart';
import {vegaLiteBarChart} from '@/pages/api/defaultCode/vega-lite/bar-chart';
import {chartistBarChart} from '@/pages/api/defaultCode/chartist/bar-chart';
import {echartsBarChart} from '@/pages/api/defaultCode/echarts/bar-chart';
import {apexChartsBarChart} from '@/pages/api/defaultCode/apexcharts/bar-chart';
import {frappeChartsBarChart} from '@/pages/api/defaultCode/frappe-charts/bar-chart';
import {d3PieChart} from '@/pages/api/defaultCode/d3/pie-chart';
import {d3LineChart} from '@/pages/api/defaultCode/d3/line-chart';
import {d3ScatterPlot} from '@/pages/api/defaultCode/d3/scatter-plot';
import {chartJsPieChart} from '@/pages/api/defaultCode/chart-js/pie-chart';
import {chartJsLineChart} from '@/pages/api/defaultCode/chart-js/line-chart';
import {chartJsScatterPlot} from '@/pages/api/defaultCode/chart-js/scatter-plot';
import {vegaLitePieChart} from '@/pages/api/defaultCode/vega-lite/pie-chart';
import {vegaLiteLineChart} from '@/pages/api/defaultCode/vega-lite/line-chart';
import {vegaLiteScatterPlot} from '@/pages/api/defaultCode/vega-lite/scatter-plot';
import {chartistPieChart} from '@/pages/api/defaultCode/chartist/pie-chart';
import {chartistLineChart} from '@/pages/api/defaultCode/chartist/line-chart';
import {chartistScatterPlot} from '@/pages/api/defaultCode/chartist/scatter-plot';
import {echartsPieChart} from '@/pages/api/defaultCode/echarts/pie-chart';
import {echartsLineChart} from '@/pages/api/defaultCode/echarts/line-chart';
import {echartsScatterPlot} from '@/pages/api/defaultCode/echarts/scatter-plot';
import {apexchartsPieChart} from '@/pages/api/defaultCode/apexcharts/pie-chart';
import {apexchartsLineChart} from '@/pages/api/defaultCode/apexcharts/line-chart';
import {apexchartsScatterPlot} from '@/pages/api/defaultCode/apexcharts/scatter-plot';
import {frappeChartsPieChart} from '@/pages/api/defaultCode/frappe-charts/pie-chart';
import {frappeChartsLineChart} from '@/pages/api/defaultCode/frappe-charts/line-chart';

export const getDefaultCode = (
  library: LibraryEnum,
  visualisationType: VisualisationTypeEnum
): string | null => {
  switch (library) {
  case LibraryEnum.D3:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return d3BarChart;
    case VisualisationTypeEnum.PIE_CHART:
      return d3PieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return d3LineChart;
    case VisualisationTypeEnum.SCATTER_PLOT:
      return d3ScatterPlot;
    }
    break;
  case LibraryEnum.CHART_JS:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return barChartChartJs;
    case VisualisationTypeEnum.PIE_CHART:
      return chartJsPieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return chartJsLineChart;
    case VisualisationTypeEnum.SCATTER_PLOT:
      return chartJsScatterPlot;
    }
    break;
  case LibraryEnum.VEGA_LITE:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return vegaLiteBarChart;
    case VisualisationTypeEnum.PIE_CHART:
      return vegaLitePieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return vegaLiteLineChart;
    case VisualisationTypeEnum.SCATTER_PLOT:
      return vegaLiteScatterPlot;
    }
    break;
  case LibraryEnum.CHARTIST:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return chartistBarChart;
    case VisualisationTypeEnum.PIE_CHART:
      return chartistPieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return chartistLineChart;
    case VisualisationTypeEnum.SCATTER_PLOT:
      return chartistScatterPlot;
    }
    break;
  case LibraryEnum.ECHARTS:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return echartsBarChart;
    case VisualisationTypeEnum.PIE_CHART:
      return echartsPieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return echartsLineChart;
    case VisualisationTypeEnum.SCATTER_PLOT:
      return echartsScatterPlot;
    }
    break;
  case LibraryEnum.APEX_CHARTS:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return apexChartsBarChart;
    case VisualisationTypeEnum.PIE_CHART:
      return apexchartsPieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return apexchartsLineChart;
    case VisualisationTypeEnum.SCATTER_PLOT:
      return apexchartsScatterPlot;
    }
    break;
  case LibraryEnum.FRAPPE_CHARTS:
    switch (visualisationType) {
    case VisualisationTypeEnum.BAR_CHART:
      return frappeChartsBarChart;
    case VisualisationTypeEnum.PIE_CHART:
      return frappeChartsPieChart;
    case VisualisationTypeEnum.LINE_CHART:
      return frappeChartsLineChart;
    }
    break;
  }

  return null;
};
