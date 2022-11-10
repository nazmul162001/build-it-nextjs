import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const CompanyContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  // height: 600,
  marginTop: 150,
  padding: '30px 0px',
  background: Colors.secondary,
}))

export const CompanyImageContainer = styled(Box)(({ theme }) => ({
  width: '90%',
  height: 40,
  margin: 'auto',
  padding: '30px 0px',
  borderTop: '2px solid #678c9265',
  borderBottom: '2px solid #678c9265',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    height: 30,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 15,
  },
}))

// company details

export const CompanyDetails = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  marginTop: '60px',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}))
export const CompanyImage = styled(Box)(({ theme }) => ({
  padding: '55px',
}))
export const CompanyInfo = styled(Box)(({ theme }) => ({
  padding: '0px 30px',
}))

export const CompanyInfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: Colors.textColor,
  padding: '20px 0px',
}))

export const CompanyInfoDescription = styled(Typography)(({ theme }) => ({
  color: Colors.muted,
  padding: '20px 0px',
}))


///