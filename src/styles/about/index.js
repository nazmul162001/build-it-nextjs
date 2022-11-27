import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../theme'

export const AboutContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '30vh',
  background: Colors.secondary,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '120px 60px 60px 60px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}))

export const AboutHero = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
export const AboutHero2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
