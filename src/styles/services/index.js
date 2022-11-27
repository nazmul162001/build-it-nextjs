import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../theme'
import bg from '/public/img/services/Bg.png'

export const ProjectsContainer = styled(Box)(({ theme }) => ({
    background: Colors.secondary,
    padding: '50px 0px',
  ////// background ///////
  backgroundImage: `url(${bg.src})`,
  width: '100%',
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
//   ////////////////////////////
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  }))

export const ProjectsContent = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: '360px',
    [theme.breakpoints.down('lg')]: {
    padding: '300px',
    },
    [theme.breakpoints.down('md')]: {
    padding: '150px',
    },
    [theme.breakpoints.down('sm')]: {
    padding: '50px',
    },
  }))

export const ProjectsTitle = styled(Typography)(({ theme }) => ({
    color: Colors.textColor,
    fontWeight: '700',
    fontSize: '36px',
  }))
export const ProjectsDescription = styled(Typography)(({ theme }) => ({
    color: Colors.muted,
  }))