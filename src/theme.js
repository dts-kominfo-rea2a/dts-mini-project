import { green, grey, lightBlue, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const themes = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: '#E50913'
      },
      secondary: {
        main: red[700],
      },
      error: {
        light: red[400],
        main: red[500],
        dark: red[300],
        contrastText: grey[800]
      },
      success: {
        main: green[500]
      },
      warning: {
        main: yellow[500],
        contrastText: grey[800]
      },
      info: {
        main: lightBlue[500]
      },
      text: {
        primary: '#FFF',
        secondary: grey[700],
        disabled: grey[500]
      },
      action: {
        active: red[200],
        activeOpacity: 1,
        disabled: grey[700],
        disabledBackground: grey[200],
        hover: red[100],
        hoverOpacity: 0.7,
        focus: red[600],
        focusOpacity: 1,
        selected: red[300],
        selectedOpacity: 1
      },
      background: {
        default: '#201F1F',
        paper: '#201F1F'
      },
      common: {
        black: grey[900],
        white: grey[200]
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
      tonalOffset: 0.2
    }
});

export default themes;