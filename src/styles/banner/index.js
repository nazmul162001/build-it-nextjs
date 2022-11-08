import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../theme'
import bg from '/public/img/banner/banner-bg.png'

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  width: '100%',
  height: '100vh',
  padding: '0px 0px',
  background: Colors.secondary,
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    textAlign: 'center',
  },
}))

export const BannerContent = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxwidth: 420,
  padding: '30px 30px 0px 70px',
  marginTop: '70px',
}))
export const BannerImageContent = styled(Box)(() => ({
  backgroundImage: `url(${bg.src})`,
  width: '100%',
  height: '120%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  fontWeight: '700',
  lineHeight: '72px',
  marginBottom: '20px',
  color: Colors.textColor,
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
  },
}))

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  marginBottom: '3em',
  color: Colors.primary,
  [theme.breakpoints.down('md')]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: '1.5em',
  },
}))

export const BannerButton = styled(Box)(({theme}) => ({
  display: 'flex',
  marginTop: '40px',
  gap: 20,
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}))
