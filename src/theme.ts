import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#BF1A2F',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;