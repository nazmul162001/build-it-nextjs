import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../theme'

export const AboutContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100vh',
    background: Colors.secondary,
    [theme.breakpoints.down('md')]: {},
  }))