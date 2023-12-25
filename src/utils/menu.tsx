import {Layers as LayersIcon, AutoGraph as AutoGraphIcon} from '@mui/icons-material';
import React from 'react';

export const mainMenu = [{
  href: '/libraries',
  name: 'Libraries',
  icon: <LayersIcon color="primary" />
}, {
  href: '/visualisation',
  name: 'Visualisation',
  icon: <AutoGraphIcon color="primary" />
}];
