import { styled } from '@mui/system';
import { Box, Typography, List, IconButton } from '@mui/material';
import {Colors, DrawerWidth} from '../theme'


// container
export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  // marginTop: 4,
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'all .2s ease-in',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
}))

export const GetProject = styled(Box)(() => ({
//   display: 'flex',
//   marginTop: 4,
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '2px 8px',
}))

// header
export const AppbarHeader = styled(Typography)(() => ({
  fontSize: '3em',
  color: Colors.secondary,
}))

// my list 
export const MyList = styled(List)(({ type }) => ({
    display: type === "row" ? "flex" : "block",
  justifyContent: "center",
  alignItems: "center",
  color: Colors.muted,
}));

// drawerClose Button 
export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'fixed',
    top: 10,
    left: DrawerWidth,
    zIndex: 10000,      
  }));
