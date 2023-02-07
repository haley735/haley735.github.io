import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#550000',
    },
    background: {
      default: '#bdbdbd',
      paper: '#fafafa',
    },
    text: {
      secondary: '#1a237e',
    },
  },
});

export default theme;