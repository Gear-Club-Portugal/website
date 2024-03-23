import { createTheme } from '@mui/material/styles';

const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

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
    secondary: {
      main: '#ffffff',
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

theme.typography.h5 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 23,
  fontWeight: fontWeight.bold,
  lineHeight: 'auto',
};

export { theme };
