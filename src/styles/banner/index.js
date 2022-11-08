import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../theme'
import bg from '/public/img/banner/banner-bg.png'

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  width: '100%',
  height: 780,
  padding: '0px 0px',
  overflow: 'hidden',
  background: Colors.secondary,
  zIndex: 100,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    textAlign: 'center',
    height: '100%',
    overflow: 'none',
    paddingTop: '100px',
  },
}))

export const BannerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  //   alignItems: 'center',
  maxwidth: 420,
  padding: '0px 0px 0px 70px',
  [theme.breakpoints.down('md')]: {
    padding: '20px',
  },
}))

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '64px',
  fontWeight: '700',
  lineHeight: '72px',
  marginBottom: '20px',
  color: Colors.textColor,
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
    lineHeight: '40px',
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

export const BannerButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginTop: '40px',
  gap: 20,
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
  },
}))

///// Image content /////

export const BannerImageContent = styled(Box)(() => ({
  ////// background ///////
  backgroundImage: `url(${bg.src})`,
  width: '100%',
  height: '120%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',
  ////////////////////////////
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const BannerImageContentMain = styled(Box)(({ theme }) => ({
  width: '100%',
  paddingRight: '70px',
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: 20,
  [theme.breakpoints.down('md')]: {
    paddingRight: '0px',
    padding: '0px 20px',
  },
}))

export const Banner1 = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'end',
  justifyItems: 'center',
  [theme.breakpoints.down('md')]: {
    gap: 5,
  },
}))

export const Banner2 = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'start',
  justifyItems: 'start',
  gap: 25,
  [theme.breakpoints.down('md')]: {
    gap: 10,
  },
}))

// image box

export const ImageOne = styled(Box)(({ theme }) => ({
  maxWidth: 140,
  maxHeight: 140,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('md')]: {
    maxWidth: 145,
    maxHeight: 145,
  },
}))
export const ImageTwo = styled(Box)(() => ({
  maxWidth: 210,
  maxHeight: 150,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'end',
}))
export const ImageThree = styled(Box)(() => ({
  maxWidth: 125,
  maxHeight: 125,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'end',
}))
export const ImageFour = styled(Box)(() => ({
  maxWidth: 290,
  maxHeight: 220,
  width: '100%',
  height: '100%',
}))
export const ImageFive = styled(Box)(() => ({
  maxWidth: 185,
  maxHeight: 185,
  width: '100%',
  height: '100%',
}))
