import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
    typography: {
      fontFamily: '"Poppins", serif',
    },
    palette: {
      primary: {
        main: '#789E87',
      },
      background: {
        default: '#789E87',
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
        main: '#789E87',
      },
   
      text: {
        primary: '#000000',
      },
    },
  });
export {theme, themeDashboard};