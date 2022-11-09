import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const InnovativeContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: '10px 0px',
  marginTop: '100px',
}))

export const InnovativeTitle = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: Colors.textColor,
  fontWeight: 'bold',
}))

//   innovative content

export const InnovativeContent = styled(Box)((theme) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 20,
  padding: '40px 20px',
//   justifyItems: 'center',
//   [theme.breakpoints.down('md')]: {
//     gridTemplateColumns: 'repeat(2, 1fr)',
//   },
}))

export const InnovativeItem = styled(Box)((theme) => ({
  padding: '30px 70px',
  borderRadius: '5px',
  transition: '.2s ease-in',
  cursor: 'pointer',
  boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  }
}))
export const InnovativeItemTitle = styled(Box)((theme) => ({}))
export const InnovativeItemDescription = styled(Box)((theme) => ({
  color: Colors.muted,
  lineHeight: 2,
}))
