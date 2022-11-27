import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Colors } from '../../theme'

export const InstagramContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: Colors.secondary,
}))

export const InstagramContent = styled(Box)(({ theme }) => ({
  padding: '50px 100px 25px 100px',
  [theme.breakpoints.down('md')]: {
    padding: '50px 30px 25px 30px',
  },
}))

export const InstagramGridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  // padding: '100px',
  gap: 15,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    // padding: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
    // padding: '20px',
  },
}))

export const ImgBox = styled(Box)(({ theme }) => ({}))
export const ImgBoxContent = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(88.65deg, #C6DBFF 0%, #E1EBFA 100%)',
  padding: '10px',
  // boxShadow: 'box-shadow: rgba(225, 235, 250 0.56) 0px 22px 70px 4px;',
  filter: 'drop-shadow(0px 30px 60px rgba(59, 130, 246, 0.25))',
}))

export const ButtonBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}))

