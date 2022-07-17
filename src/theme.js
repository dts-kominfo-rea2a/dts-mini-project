import { createTheme } from '@mui/material/styles';


const themes = createTheme({
  palette: {
    mode: 'dark',
    background:{
      default: '#201F1F'
    },
    primary: {
      light: '#757ce8',
      main: '#1b5e20',
      dark: '#201F1F',
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

export default themes;