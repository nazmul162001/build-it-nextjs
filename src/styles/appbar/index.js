import { styled } from '@mui/system';
import { Box, Typography, List, IconButton } from '@mui/material';
import {Colors, DrawerWidth} from '../theme'


// container
export const AppbarContainer = styled(Box)(() => ({
  display: 'flex',
  marginTop: 4,
  justifyContent: 'space-between',
  alignItems: 'center',
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
    position: 'absolute',
    top: 10,
    left: DrawerWidth,
    zIndex: 1999,      
  }));
