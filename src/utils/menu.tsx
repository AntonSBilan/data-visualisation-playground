import {Layers as LayersIcon, DonutLarge as DonutLargeIcon, AutoGraph as AutoGraphIcon} from '@mui/icons-material';
import React from 'react';

export const mainMenu = [{
  href: '/',
  name: 'Home',
  icon: <DonutLargeIcon color="primary" />
}, {
  href: '/libraries',
  name: 'Libraries',
  icon: <LayersIcon color="primary" />
}, {
  href: '/visualisation',
  name: 'Visualisation',
  icon: <AutoGraphIcon color="primary" />
}];
