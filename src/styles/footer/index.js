import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../theme'

export const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: Colors.darkblue,
  color: Colors.white,
  fontWeight: 300,
  [theme.breakpoints.down('md')]: {},
}))

export const FooterContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 2,
  padding: '60px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}))

export const FooterCompany = styled(Typography)(({ theme }) => ({
  margin: '15px 0px',
  fontSize: '14px',
  [theme.breakpoints.down('md')]: {
    margin: '10px 0px',
  },
}))
export const FooterCopyRight = styled(Typography)(({ theme }) => ({
  margin: '55px 0px',
  fontSize: '14px',
  [theme.breakpoints.down('md')]: {
    margin: '40px 0px',
  },
}))

export const FooterGetInTouch = styled(Box)(({ theme }) => ({
    paddingTop: '5px',
  [theme.breakpoints.down('md')]: {
    marginTop: '15px',
    borderTop: '2px solid #96D0D9',
    borderBottom: '2px solid #96D0D9',
  },
}))
export const FooterBox1 = styled(Box)(({ theme }) => ({
    marginBottom: '15px',
  [theme.breakpoints.down('md')]: {
    borderBottom: '2px solid #96D0D9',
    padding: '10px 0px'
  },
}))
