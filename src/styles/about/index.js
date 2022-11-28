import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../theme'

export const AboutContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  background: Colors.secondary,
  paddingTop: '60px',
}))
export const AboutContainerContent = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '60px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '40px',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '20px',
  },
}))

export const AboutHero = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}))
export const AboutHero2 = styled(Box)(({ theme }) => ({
  paddingRight: '50px',
  [theme.breakpoints.down('md')]: {
    paddingRight: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingRight: '5px',
  },
}))

export const AboutHeroTitle = styled(Typography)(({ theme }) => ({
  color: Colors.textColor,
  fontWeight: 'bold',
  fontSize: '36px',
  [theme.breakpoints.down('md')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}))
