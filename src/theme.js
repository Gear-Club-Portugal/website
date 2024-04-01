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
      secondary: '#000000',
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

theme.typography.h1 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 41,
  lineHeight: '60px',
  fontWeight: fontWeight.bold,
  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
    lineHeight: '48px',
  },
};

theme.typography.h4 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 28,
  fontWeight: fontWeight.bold,
  [theme.breakpoints.down('sm')]: {
    fontSize: 23,
    lineHeight: '32px',
  },
};

theme.typography.h5 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 25,
  fontWeight: fontWeight.bold,
  [theme.breakpoints.down('sm')]: {
    fontSize: 20,
    lineHeight: '30px',
  },
};

theme.typography.h6 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 22,
  fontWeight: fontWeight.bold,
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
    lineHeight: '30px',
  },
};

theme.typography.body1 = {
  fontFamily: theme.typography.fontFamily,
  fontWeight: fontWeight.regular,
  fontSize: 20,
  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
    lineHeight: '24px',
  },
};

theme.typography.body2 = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 16,
  fontWeight: fontWeight.bold,
  [theme.breakpoints.down('sm')]: {
    fontSize: 12,
    lineHeight: '16px',
  },
};

theme.typography.caption = {
  fontFamily: theme.typography.fontFamily,
  fontSize: 18,
  fontWeight: fontWeight.regular,
  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
    lineHeight: '20px',
  },
};

export { fontWeight, theme };
