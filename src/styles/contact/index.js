import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Colors } from '../theme'
import bg from '/public/img/banner/banner-bg.png'

export const ContactContainer = styled(Box)(({ theme }) => ({
    background: Colors.secondary,
    padding: '50px 0px',
  ////// background ///////
  backgroundImage: `url(${bg.src})`,
  width: '100%',
  height: '120%',
  backgroundSize: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top right',
  ////////////////////////////
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  }))