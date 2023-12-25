import {createTheme, ThemeProvider} from '@mui/material';
import React, {ReactNode} from 'react';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#554367' },
      secondary: { main: '#291399' },
    },
  },
);

export function CustomTheme({ children }: {children: ReactNode}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
