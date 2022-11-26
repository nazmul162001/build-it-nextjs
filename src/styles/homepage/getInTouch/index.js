import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../theme'

export const GetInTouchContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '100px 60px',
  [theme.breakpoints.down('md')]: {
    padding: '15px',
  },
}))
export const GetInTouchGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}))
export const GetInTouchContent = styled(Box)(({ theme }) => ({}))

export const Contact = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '30px',
}))

export const GetInTouchForm = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  [theme.breakpoints.down('md')] : {
    margin: '15px 0px'
  }
}))

export const GetInTouchFormInput = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  margin: '0px 80px',
  background: Colors.secondary,
  padding: '25px',
  borderRadius: '5px',
  boxShadow: 'rgba(225, 200, 230, 0.56) 0px 22px 70px 4px',
  [theme.breakpoints.down('md')]: {
    margin: '10px 5px',
    padding: '10px'
  },
}))
