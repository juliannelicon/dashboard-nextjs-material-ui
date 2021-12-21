import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    // mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#f1f1f1',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
