import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
    typography: {
      fontFamily: '"Poppins", serif',
    },
    palette: {
      primary: {
        main: '#90D5FF',
      },
      background: {
        default: '#90D5FF',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
      },
    },
  });


  const themeDashboard = createTheme({
    components: {
      MuiListItem: {
        styleOverrides: {
          root: {
            fontFamily: 'Poppins, sans-serif',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: 'Poppins, sans-serif',
          },
        },
      },
    },

    typography: {
      fontFamily: '"Poppins", serif',
    },
    palette: {
      primary: {
        main: '#90D5FF',
      },
   
      text: {
        primary: '#000000',
      },
    },
  });
export {theme, themeDashboard};