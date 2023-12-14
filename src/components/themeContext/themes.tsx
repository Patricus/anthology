import { ThemeOptions, createTheme } from '@mui/material/styles';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#8F85FF',
      light: '#bcb6ff',
      dark: '#7c70ff',
      contrastText: '#f7eee2',
    },
    secondary: {
      main: '#FF8966',
    },
    error: {
      main: '#af3e3e',
      light: '#c95b5b',
    },
    divider: 'rgba(253,1,1,0.12)',
    info: {
      main: '#0686d0',
    },
    text: {
      disabled: 'rgba(133,65,65,0.61)',
      secondary: 'rgba(181,207,232,0.91)',
      primary: 'rgba(255,255,255,0.87)',
    },
    background: {
      paper: '#585858',
      default: '#3f3f3f',
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    fontWeightMedium: 600,
    h6: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
    },
  },
};

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#8F85FF',
      light: '#bcb6ff',
      dark: '#7c70ff',
      contrastText: '#f7eee2',
    },
    secondary: {
      main: '#FF8966',
    },
    error: {
      main: '#af3e3e',
      light: '#c95b5b',
    },
    divider: 'rgba(253,1,1,0.12)',
    info: {
      main: '#0686d0',
    },
    background: {
      paper: '#f9f1e0',
      default: '#f7f7f7',
    },
    text: {
      secondary: 'rgba(109,159,185,0.69)',
    },
  },
  typography: {
    fontFamily: 'Comfortaa',
    fontWeightMedium: 600,
    h6: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    button: {
      fontWeight: 500,
    },
  },
};

export const darkTheme = createTheme(darkThemeOptions);
export const lightTheme = createTheme(lightThemeOptions);
