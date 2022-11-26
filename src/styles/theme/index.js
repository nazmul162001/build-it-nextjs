import { createTheme } from '@mui/material/styles'
import { lighten } from "polished";

export const DrawerWidth = 230;

export const Colors = {
  primary: '#4397A4',
  secondary: '#E1EBFA',
  textColor: '#486A6F',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#678C92',
  border: '#DDDFE1',
  darkblue: '#486F74',
  shaft: '#333',
  ///////////////
  // Grays
  ///////////////
  dim_grey: '#696969',
  dove_gray: '#d5d5d5',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  ///////////////
  // Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    muted: {
      main: Colors.muted,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.secondary,
          color: Colors.secondary,
          borderRadius: '0px 60px 0px 0px',
          borderRight: `1px solid ${Colors.secondary}`
        },
      },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: lighten(0.2, Colors.primary)
            }
        }
    }
  },
})
export default theme
