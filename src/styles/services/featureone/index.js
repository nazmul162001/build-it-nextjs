import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../../theme'

export const FeatureContainer = styled(Box)(({ theme }) => ({
    width: '100%',
    margin: '200px 0px',
    [theme.breakpoints.down('md')]: {
        margin: '100px 0px',
    }
  }))

export const FeatureContent = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
    }
  }))
export const FeatureContentImage = styled(Box)(({ theme }) => ({
    padding: '50px',
  }))
export const FeatureContentInfo = styled(Box)(({ theme }) => ({
    padding: '50px',
  }))
export const FeatureContentTitle = styled(Typography)(({ theme }) => ({
    color: Colors.textColor,
    margin: '25px 0px',
    fontWeight: 'bold',
  }))
export const FeatureContentDescription = styled(Typography)(({ theme }) => ({
    color: Colors.muted,
  }))
export const FeatureContentBox = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 20,
    marginTop: 100
  }))
export const FeatureBox1 = styled(Box)(({ theme }) => ({
    padding: '30px',
    background: '#C6DBFF',
    boxShadow: '0px 30px 60px rgba(59, 130, 246, 0.25)',
  }))
export const SeeMore = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '0px 80px'
  }))