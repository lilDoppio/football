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
            },
            '&.MuiTypography-body1': {
              fontSize: '14px'
            },
            '&.MuiTypography-body2': {
              fontSize: '12px'
            }
          }
        }
      }
    },
    typography: {
      fontFamily: 'DM Sans, sans-serif'
    }
})