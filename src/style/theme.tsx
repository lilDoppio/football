import { createTheme } from '@mui/material/styles';

export const rootTheme = createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            '&.MuiTypography-h4': {
              fontSize: '24px',
              fontWeight: '700'
            },
            '&.MuiTypography-h5': {
              fontSize: '22px'
            },
            '&.MuiTypography-h6': {
              fontSize: '18px'
            }
          }
        }
      }
    },
    spacing: [20, 25, 50],
    typography: {
      fontFamily: 'DM Sans, sans-serif'
    }
})