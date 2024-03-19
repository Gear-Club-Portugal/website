'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#2A2A2A',
      paper: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#0202fa',
    },
    error: {
      main: '#940607',
    },
    warning: {
      main: '#f8f217',
    },
  },
  typography: {
    fontFamily: ['oswald', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

export { theme };
