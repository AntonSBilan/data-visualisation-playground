import type { NextApiRequest, NextApiResponse } from 'next';
import {v4} from 'uuid';
import {LibraryEnum} from '@/types';

let storage: Record<string, string> = {};
const libraries: {[k in LibraryEnum]: {script: string[], style: string[]}} = {
  [LibraryEnum.D3]: {
    style: [],
    script: ['https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js'],
  },
  [LibraryEnum.CHART_JS]: {
    style: [],
    script: ['https://cdn.jsdelivr.net/npm/chart.js']
  },
  [LibraryEnum.VEGA_LITE]: {
    style: [],
    script: [
      'https://cdn.jsdelivr.net/npm/vega@5.25.0',
      'https://cdn.jsdelivr.net/npm/vega-lite@5.12.0',
      'https://cdn.jsdelivr.net/npm/vega-embed@6.22.1',
    ]
  },
  [LibraryEnum.CHARTIST]: {
    style: ['https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css'],
    script: [
      'https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js',
    ]
  },
  [LibraryEnum.ECHARTS]: {
    style: [],
    script: [
      'https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js',
    ]
  },
  [LibraryEnum.APEX_CHARTS]: {
    style: [],
    script: [
      'https://cdn.jsdelivr.net/npm/apexcharts',
    ]
  },
  [LibraryEnum.FRAPPE_CHARTS]: {
    style: [],
    script: [
      'https://cdn.jsdelivr.net/npm/frappe-charts@1.6.1/dist/frappe-charts.min.umd.js',
    ]
  }
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const code = storage[req.query?.codeUuid as string];
    const library = libraries[req.query?.library as LibraryEnum];
    if (code && Object.keys(storage).length > 1000) {
      storage = {};
    }
    res.setHeader('content-type', 'text/html');
    res.status(200);
    res.send(`<!DOCTYPE html>
      <html lang="en">
      <head>
      <title>Visualisation Iframe</title>
      ${library ? library?.style?.map(i => `<link rel="stylesheet" href="${i}">`)?.join('\n') : ''}
      </head>
      <body style="max-height: 90vh">
          ${library ? library?.script?.map(i => `<script src="${i}"></script>`)?.join('\n') : ''}
          <script>
            ${code || ''}
          </script>
      </body>
      </html>
    `);
  } else if (req.method === 'POST') {
    const code = req.body?.code as string;
    const uuid = v4();
    storage[uuid] = code;

    res.status(200);
    res.json({codeUuid: uuid});
  }
}
