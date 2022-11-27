import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const CallUsContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: 'white',
  height: 200,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0px',
}))

export const CallUsContent = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '30px',
  margin: '100px',
  borderTop: '2px solid rgba(103, 140, 146, 0.5)',
  borderBottom: '2px solid rgba(103, 140, 146, 0.5)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    padding: '15px',
    margin: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    padding: '5px',
    margin: '0px',
  }
}))

export const CustomButton = styled(Button)(({ theme }) => ({
 background: Colors.primary,
 color: 'white',
 padding: '5px 40px',
 marginRight: '20px',
 textTransform: 'capitalize',
 fontSize:'12px',
 fontWeight: 'normal',
'&:hover': {
    background: '#C6DBFF',
    color: 'black',
}
}))
export const CustomButton2 = styled(Button)(({ theme }) => ({
 background: '#C6DBFF',
 color: Colors.textColor,
 padding: '5px 40px',
 color: 'black',
 textTransform: 'capitalize',
 fontSize:'12px',
 fontWeight: 'normal',
 '&:hover': {
    background: Colors.primary,
    color: 'white',
}
}))
