import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const FeatureContainer = styled(Box)(({ theme }) => ({
  width: '100%',
}))

export const FeatureGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  padding: '100px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    padding: '50px 30px',
    gap: 10
  },
}))
export const FeatureContent = styled(Box)(({ theme }) => ({}))

export const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: Colors.textColor,
  padding: '20px 0px',
}))

export const FeatureDescription = styled(Typography)(({ theme }) => ({
  color: Colors.muted,
  padding: '0px 40px 0px 0px',
}))

export const FeatureImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0px 4px',
  justifyContent: 'center',
}))
export const FeatureImageContent = styled(Box)(({ theme }) => ({
  flex: '25%',
  maxWidth: '40%',
  padding: '0px 4px',
  [theme.breakpoints.down('sm')] : {
    maxWidth: '100%',
  }
}))
