import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const InstagramContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: Colors.secondary,
}))

export const InstagramGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  padding: '100px',
  gap: 15,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    padding: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '20px',
  },
}))
